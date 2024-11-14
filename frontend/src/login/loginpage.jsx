import { useState } from 'react'
import { Typography, Box, FormControl, Button, InputAdornment, IconButton,createTheme, OutlinedInput, ThemeProvider} from "@mui/material"
import LoginIcon from '@mui/icons-material/Login'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { red, } from '@mui/material/colors';
import { Form, useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function LoginBox(){

    const myTheme = createTheme({

        palette:{
    
            primary:{
                light: '#f9f9f9',
                dark:'#460071',
                main: "#4a148c"
    
            },
            secondary:{
                main: red[800]}
        },

        components:{

            MuiOutlinedInput:{
                
                input:{color:"#4a148c"},
                root:{margin:"0.2em"}
                
            }
        }
    })
     
    //To navigate to signup page
    const nav = useNavigate()
    const routeSignup =()=>{
        nav('/signup')
    }
    return(
        <ThemeProvider theme={myTheme}>
        <Box label='main-box'
            sx={{display: 'flex',
            flexDirection:'row-reverse', 
            justifyContent:'center', 
            alignItems:'center',
            backgroundColor:'primary.light',
            padding:"1rem",}}>

            <Box label="login-box"  
            sx={{display: 'flex',
            flexDirection:'column', 
            justifyContent:'center', 
            alignItems:'center',
            background: "linear-gradient(76.8deg, rgb(121, 45, 129) 3.6%, rgb(36, 31, 98) 90.4%)",
            minHeight:'90vh',
            minWidth:"30%",
            borderRadius:'0px 16px 16px 0px'
            }}>


            <LoginForm theme={myTheme}/>

            <Box label='signup-box'
            sx={{display: 'flex',
                        flexDirection:'column', 
                        justifyContent:'center', 
                        alignItems:'center',
                        margin:"1rem"}}>
                <Typography component="h1"
                sx={{ width: '100%', fontSize: 'clamp(1rem, 5vw, 1.5rem)' }}>
                Don't have an account yet?
                </Typography>
                
                <Button 
                id="login_button" 
                variant="contained" 
                color="secondary" 
                startIcon={<AutoAwesomeIcon />}
                onClick={routeSignup}> Sign Up</Button>
                </Box>

            </Box> 


            <Box id="content-box"
            sx={{
                backgroundImage:"url('src/assets/logincover1.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius:" 16px 0px 0px 16px",
                height: "90vh",
                width: "70vw"
            }}>
            </Box>

        </Box> 
        </ThemeProvider>
    )
}

function LoginForm(props){

    const [user, setUser] = useState({ 
        user_name : " ",
        user_pass : " "})

    const onSubmitHandler=(e)=>{

        e.preventDefault()
        console.log(user)
    }

    //To show/hide the password input
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
      const handleMouseUpPassword = (event) => {
        event.preventDefault();
      };
    return(
        <ThemeProvider theme={props.theme}>
        <Box label="login-box"  
            sx={{display: 'flex',
            flexDirection:'column', 
            justifyContent:'center', 
            alignItems:'center',
            minHeight:'50%',
            minWidth:"100%",
            borderRadius:'0px 16px 16px 0px'
            }}>

                <Typography component="h3"
                variant="h4">
                Welcome Back!
                </Typography>

                <form id="login-form-main"
                    style={{display: 'flex',
                    flexDirection:'column', 
                    justifyContent:'center', 
                    alignItems:'center',
                    minWidth:'100%'}}

                onSubmit={onSubmitHandler}>

                    <FormControl 
                    margin='normal'
                    sx={{minWidth:'80%'}}>

                        <OutlinedInput
                        type='text'
                        placeholder='Username'
                        fullWidth={true}
                        notched={true}
                        sx ={{backgroundColor:"primary.light"}}
                        onChange={(e)=>{{setUser({...user, user_name: e.target.value})}}}>
                        </OutlinedInput>

                    </FormControl>
                    
                    <FormControl sx={{minWidth:'80%'}}>
                        <OutlinedInput 
                        placeholder='Password'
                        fullWidth={true}
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e)=>{setUser({...user, user_pass: e.target.value})}}
                        sx={{margin: "", backgroundColor:'primary.light', label:{color:'white'}, placeholder:{color:'white'}}}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility" 
                                sx={{color: "primary.main"}}
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }>
                            
                        </OutlinedInput>

                    </FormControl>

                    <Button id="login_button"
                    sx={{minWidth:'80%'}}
                    variant="contained" 
                    color="success"
                    onClick={onSubmitHandler}
                    startIcon={<LoginIcon />}>Login</Button>
                    
                </form>
            </Box> 
            </ThemeProvider>
    )
}