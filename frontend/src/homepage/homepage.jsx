import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {createTheme,ThemeProvider, Typography, Box, FormControl,TextField, Button, OutlinedInput,Menu, MenuItem, AppBar, Toolbar, Alert} from "@mui/material"
import Grid from '@mui/material/Grid2'
import Logo from "../assets/homepage-logo-white.svg"
import { red } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';

export default function Home(){

    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl)

    const [anchor1, setAnchor1]=useState(null)
    const menuOpen1 = Boolean(anchor1)

    const [anchor2, setAnchor2] = useState(null)
    const menuOpen2= Boolean(anchor2)

    const handlemenuClick = (e) =>{
        setAnchorEl(e.currentTarget);
    }

    const handlemenuClose = () => {
        setAnchorEl(null);
    };

    const handlemenuClick1= (e) =>{
        setAnchor1(e.currentTarget);
    }

    const handlemenuClose1 = () => {
        setAnchor1(null);
    };

    const handlemenuClick2= (e) =>{
        setAnchor2(e.currentTarget);
    }

    const handlemenuClose2 = () => {
        setAnchor2(null);
    };

    const nav = useNavigate()
    const handleloginClick = ()=>{
        nav('/login')
    }

    const handlesignupClick = ()=>{
        nav('/signup')
    }

    const myTheme= createTheme({
        palette:{

            primary:{
                light: '#f9f9f9',
                dark:'#460071',
                main: "#4a148c"
    
            },
            secondary:{
                main:red[600],
                dark: '#9f1e49'}
        },
        
        components:{

            MuiButton:{
                
            }
        }
    })
    return(
        <ThemeProvider theme={myTheme}>
        <Box 
        sx={{display:'flex', flexDirection:"row"}}>
        <AppBar position='fixed'
        
        sx={{width:'100vw', background: "linear-gradient(-225deg, #2f1b41 10%, #44107A 30%, #FF1361 80%, #fecd51 100%)"}}>


            <Toolbar position='static'>

                <Grid id="toolbar-grid-main" spacing={40} container >


                <Grid id="toolbar-grid-left" container spacing={4} justify={"space-between"}>

                    <Grid id="logo-grid" justifyContent={'center'} alignContent={'center'}>
                        <Box component='img' sx={{height: '18vh'}} alt="globallU-logo" src={Logo} />
                    </Grid>
        
                    <Grid id="connect-network-grid" justifyContent={'center'} alignContent={'center'}>
                        
                        <Button 
                        id="connect-network-button"
                        variant='text' 
                        sx={{color:'primary.light', fontWeight:'bold'}}
                        disableRipple 
                        disableFocusRipple
                        anchorel={anchorEl} 
                        aria-controls={menuOpen ? "connect-network-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={menuOpen ? 'true' : undefined}
                        onClick={handlemenuClick}> Connect & Network</Button>
                    
                        <Menu
                        id="connect-network-menu"
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handlemenuClose}>
                            <MenuItem>Connect with a friend</MenuItem>
                            <MenuItem>Join a community</MenuItem>
                        </Menu>

                        
                    </Grid>

                    <Grid id="events-grid" justifyContent={'center'} alignContent={'center'}>
                        
                        <Button 
                        id="events-button"
                        variant='text' 
                        sx={{color:'primary.light', fontWeight:'bold'}}
                        disableRipple 
                        disableFocusRipple
                        anchorel={anchor1} 
                        aria-controls={menuOpen1 ? "events-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={menuOpen1 ? 'true' : undefined}
                        onClick={handlemenuClick1}>

                        Events

                        </Button>
                    
                        <Menu
                        id="events-menu"
                        anchorEl={anchor1}
                        open={menuOpen1}
                        onClose={handlemenuClose1}>
                            <MenuItem>Upcoming Events</MenuItem>
                            <MenuItem>Social events</MenuItem>
                            <MenuItem>Networking events</MenuItem>
                        </Menu>

                        
                    </Grid>

                    <Grid id="info-grid" justifyContent={'center'} alignContent={'center'}>
                        
                        <Button 
                        id="info-button"
                        variant='text' 
                        sx={{color:'primary.light', fontWeight:'bold'}}
                        disableRipple 
                        disableFocusRipple
                        anchorel={anchor2} 
                        aria-controls={menuOpen2 ? "events-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={menuOpen2 ? 'true' : undefined}
                        onClick={handlemenuClick2}>

                        Information

                        </Button>
                    
                        <Menu
                        id="events-menu"
                        anchorEl={anchor2}
                        open={menuOpen2}
                        onClose={handlemenuClose2}>
                            <MenuItem>Professional resources</MenuItem>
                            <MenuItem>Immigration resources</MenuItem>
                        
                        </Menu>

                        
                    </Grid>

                    <Grid id="about-grid" justifyContent={'center'} alignContent={'center'}>

                        <Button 
                        variant='text' 
                        href='https://github.com/junaid9248/globallyU_app'
                        sx={{color:'primary.light', fontWeight:'bold'}}
                        disableRipple 
                        disableFocusRipple> About </Button>

                    </Grid>

                </Grid>

                <Grid id='toolbar-grid-right' justifyContent={'center'} alignContent={'center'} >

                    <Grid id="buttons-grid">
                        <Button variant='string' size='large' onClick={handleloginClick}>Log In</Button> 
                        <Button variant='contained' size='large' onClick={handlesignupClick} sx={{backgroundColor:'#2f1b41', borderRadius:'50px'}}> Sign up </Button>
                        
                    </Grid>
                    
                </Grid>
                </Grid>

            </Toolbar>
        </AppBar>

        <Grid id="grid-content" container spacing={5} direction={"column"} justifyContent={'center'} alignContent={'center'}>

            <Grid>
            <Typography variant='h2' color={"primary.dark"} fontFamily={"sans-serif"}>
                More content coming soon!
            </Typography>
            </Grid>

            <Grid sx={{display:'flex'}}>
            <Typography sx={{margin:'10px 0px'}} variant='h5' color={"black"} fontFamily={"sans-serif"}>
                Join our waitlist to get notified:
            </Typography>

            <OutlinedInput sx={{height:'40%',margin:'10px 5px'}} placeholder='Enter your email address' />
            <Button sx={{backgroundColor:'secondary.main',height:'40%',margin:'10px 5px', borderRadius:"50px"}} variant={'contained'} > Join now </Button>
            </Grid>
            

        </Grid>
        </Box>
        </ThemeProvider>

    )
}