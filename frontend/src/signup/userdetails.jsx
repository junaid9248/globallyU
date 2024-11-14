import { useState } from 'react'
import {createTheme,ThemeProvider, Typography, Box, FormControl,TextField, Button, OutlinedInput, FormHelperText, MenuItem, InputLabel} from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs';
import Autocomplete from '@mui/material/Autocomplete'
import PasswordChecklist from "react-password-checklist"
import { red } from '@mui/material/colors';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function UserDetails(props){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")

    return(
        <ThemeProvider theme={props.theme }>
        <Box id={'profile-detail-box'}
        sx={{display: 'flex',
           flexDirection:'column', 
           justifyContent:'center', 
           alignItems:'center',
           background: "linear-gradient(76.8deg, rgb(121, 45, 129) 3.6%, rgb(36, 31, 98) 90.4%)",
           borderRadius:'0px 16px 16px 0px',
           width:'50%',
           height:'90vh',
           margin:'1rem 0rem',
           padding:'0.5rem'}}>

           <Typography variant="h4" align='center'sx={{ minWidth: '100%'}}> User profile details </Typography>

           <form id='user-profile-form-main'
           styles={{display: 'flex',
             flexDirection:'column', 
             justifyContent:'center', 
             alignItems:'center',
             minWidth:'100%'}}>
           <FormControl>
               <OutlinedInput
               type='text'
               placeholder='Username'
               onChange={(e)=>{setUsername(e.target.value)}}/>
           </FormControl>
                             

           <PasswordChecklist rules={["minLength", "noSpaces", "specialChar"]}
                             value={username}
                             minLength={5}
                             maxLength={50}
                             onChange={(isValid) => {}}

                             messages={{minLength:"Username must be minimum of 5 characters", 
                                       noSpaces:"Username cannot contain any spaces",
                                       specialChar:"Username must contain a special character"
                             }}
                           />

           <FormControl>
               
               <FormControl>
                 <OutlinedInput
                 type='text'
                 placeholder='Password'
                 onChange={(e)=>{{setPassword(e.target.value)}}}
                 sx={{}} />
               </FormControl>
               
               <FormControl>
                 <OutlinedInput
                 type='text'
                 placeholder='Enter password again'
                 onChange={(e)=>{setPasswordAgain(e.target.value)}}/>
               </FormControl>
             

           </FormControl>
           <PasswordChecklist rules={["minLength", "specialChar", "capitalAndLowercase","letter", "noSpaces", "number" ,"match"]}
                 value={password}
                 valueAgain={passwordAgain}

                 minLength={8}
                 onChange={(isValid) => {}}

                 messages={{minLength:"Password must be minimum of 8 characters", 
                           capitalAndLowercase:"Password must have atleast one uppercase and one lowercase letter",
                           noSpaces:"Password cannot contain any spaces",
                           number:"Password must contain atleast one number",
                           match: "Passwords must match"
                 }}
               />

           <Button 
           sx={{minWidth:'100%'}}
             startIcon={<AddCircleOutlineIcon />}
             variant='contained' 
             size={'large'} 
             color='success'> Create my account</Button>
           </form>
           
       </Box>
       </ThemeProvider>
    )
}