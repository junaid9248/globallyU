import { useState, useRef, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import {createTheme,ThemeProvider, Typography, Box, Button, OutlinedInput, Menu, MenuItem, AppBar, Toolbar, Card, CardContent, CardMedia, Avatar, Link} from "@mui/material"
import Grid from '@mui/material/Grid2'
import Logo from "../assets/homepage-logo-white.svg"
import carousel0 from "../assets/carousel0.png"
import carousel1 from "../assets/carousel1.png"
import carousel2 from "../assets/carousel2.png"
import { AuthContext } from '../App';
import { red } from '@mui/material/colors';
import EventsList from './eventslist';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserEventlist from './usereventslist';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home(){

    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl)

    const [anchor1, setAnchor1]=useState(null)
    const menuOpen1 = Boolean(anchor1)

    const [anchor2, setAnchor2] = useState(null)
    const menuOpen2= Boolean(anchor2)

    const [anchor3, setAnchor3] = useState(null)
    const menuOpen3= Boolean(anchor3)

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

    //For account avatar
    const handlemenuClick3= (e) =>{
        setAnchor3(e.currentTarget);
    }

    const handlemenuClose3 = () => {
        setAnchor3(null);
    };

    //All navigations
    const nav = useNavigate()
    const handleloginClick = ()=>{
        nav('/login')
    }

    const handlesignupClick = ()=>{
        nav('/signup')
    }

    const handleConnectClick =()=>{
        nav('/https://www.facebook.com/?_rdr')
    }

    //Creating a ref to aboutsection
    const aboutSectionRef = useRef(null);

    const scrollToSection = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const {isLogged, setIsLogged, user, setUser} = useContext(AuthContext);

  const logOutHandler = ()=>{

    setTimeout(() => {
        setIsLogged(false)
      }, 1500);
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

    //This renders the content
    const [currentPage, setCurrentPage] = useState()

    const userEventsHandler = () =>{
        setCurrentPage('userevents')
    }
    
    const renderContent = () =>{

        switch(currentPage){

            default:
                return(
                    <About aboutSectionRef={aboutSectionRef} />
                );
            case 'home':
                return(
                    <About aboutSectionRef={aboutSectionRef}/>
                )
            case "events":
                 return(
                        <EventsList />)

            case "userevents":
                return( <UserEventlist/>)

            case "resources":
                return(<Resources />)


            case "test":
                return (
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

                </Grid>);

        }
    }

    //Main returning
    return(
        <ThemeProvider theme={myTheme}>
        <Box 
        id='main-box'
        sx={{ flexDirection:"row",justifyContent:'center',alignContent:'center'}}>

        <AppBar position='fixed' sx={{display:'flex',justifyContent:'center',height:'auto', width:'100vw', background: "linear-gradient(-225deg, #2f1b41 10%, #44107A 30%, #FF1361 80%, #fecd51 100%)"}}>

            <Toolbar position='static'>

                <Grid id="toolbar-grid-main" spacing={35} container justifyContent={'center'} alignItems={'center'} >

                    <Grid id="toolbar-grid-left" container spacing={4} justify={"space-between"}>

                        <Grid id="logo-grid" justifyContent={'center'} alignContent={'center'}>
                            <Box onClick={()=> setCurrentPage('home')} component='img' sx={{height: '15vh'}} alt="globallU-logo" src={Logo} />
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
                            href='https://www.facebook.com/?_rdr'
                            target="_blank"> Connect & Network </Button>
                        
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
                                <MenuItem onClick={()=> setCurrentPage('events')}>Upcoming Events</MenuItem>
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
                            aria-controls={menuOpen2 ? "help-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={menuOpen2 ? 'true' : undefined}
                            onClick={()=> setCurrentPage('resources')}>

                            Resources

                            </Button>
                        
                            <Menu
                            id="help-menu"
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
                            onClick={scrollToSection}                        
                            sx={{color:'primary.light', fontWeight:'bold'}}
                            disableRipple 
                            disableFocusRipple> Contact Us </Button>

                        </Grid>

                    </Grid>
                
                    {//Conditional rendering using ternary operator
                    isLogged ? 

                    <UserGrid user={user} 
                    handlemenuClick3={handlemenuClick3} 
                    handlemenuClose3={handlemenuClose3} 
                    anchor3={anchor3} 
                    setAnchor3={setAnchor3} 
                    menuOpen3={menuOpen3} 
                    logOutHandler={logOutHandler} 
                    userEventsHandler={userEventsHandler}/> 
                    
                    :

                    <Grid id='toolbar-grid-right' justifyContent={'center'} alignContent={'center'} >
                        <Grid id="buttons-grid">
                            <Button variant='string' size='large' onClick={handleloginClick}>Log In</Button> 
                            <Button variant='contained' size='large' onClick={handlesignupClick} sx={{backgroundColor:'#2f1b41', borderRadius:'50px'}}> Sign up </Button>
                        </Grid>
                    </Grid>}
                </Grid>

            </Toolbar>
        </AppBar>
    
        //The rendered box after the appbar
        <Box id='rendered-box' sx={{justifyContent:'center',alignItems:'center',marginTop:'125px'}}>
           
            {renderContent()}
            
        </Box>

        </Box>
        </ThemeProvider>
       

    )
}

//About content
function About(props){

    const images = [
        carousel0,
        carousel1,
        carousel2
      ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

    const cardData = [
  {
    title: 'Connect',
    description: 'Engage with peers from diverse backgrounds and foster meaningful relationships.',
    imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
  },
  {
    title: 'Network',
    description: 'Expand your professional circle and build connections that last a lifetime.',
    imageUrl: 'https://images.unsplash.com/photo-1580893246395-52aead8960dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Learn',
    description: 'Gain access to resources, workshops, and events designed to enhance your knowledge.',
    imageUrl: 'https://images.pexels.com/photos/29602431/pexels-photo-29602431/free-photo-of-cozy-workspace-with-coffee-and-tablet-in-istanbul-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

      return(
        <Box id="main-box"
        sx={{display: 'flex',
          flexDirection:'column', 
          justifyContent:'center', 
          alignItems:'center',
          width:'95vw',
          height:"auto",
          marginTop:'100px',}}>

        <Card sx={{ boxShadow: 3, height:'75vh', width: '100%', display:'flex', justifyContent:'center', alignContent:'center'}}> {/* Adjust width and margins as needed */}
            <CardContent sx={{justifyContent:'center', alignContent:'center',height:'100%', width:'95%'}}>
            <Slider {...settings} style={{ width: '100%', textAlign: 'center' }}>
                {images.map((url, index) => (
                <Box sx={{ display:'flex', justifyContent:'center', alignContent:'center'}}>
                    <CardMedia
                    key={index}
                    component="img"
                    height="450"
                    image={url}
                    alt={`Slide ${index + 1}`}
                    sx={{ maxHeight: '100%',objectFit: 'cover' }}
                    />
                </Box>
                ))}
            </Slider>
            </CardContent>
        </Card>

        <Grid id={'about-main-grid'} 
         container spacing={4} justifyContent="center" sx={{width:'100%',  padding:'25px 0px', margin:'25px 0px',boxShadow:3}}>

            <Grid item >
                <Typography variant="h4" color={'primary.dark'} align="center" gutterBottom fontFamily={"sans-serif"}>
                <b>GloballyU, A Platform for International Students by International Students</b>
                </Typography>
                <Typography variant="body1" align="center" color={'black'}fontFamily={"sans-serif"}>
                    Moving to a new country and starting a new life as a student is both exciting and challenging. 
                    GloballyU provides a supportive community where international students can be themselves and 
                    learn to navigate the ups-and-downs of life abroad. Our platform offers resources, connections, 
                    and opportunities to build lifelong networks and gain meaningful experiences.
                </Typography>
            </Grid>

            {cardData.map((item, index) => (
                <Grid item size={3} xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                        component="img"
                        height="300"
                        image={item.imageUrl}
                        alt={item.title}
                        sx={{objectFit:'cover'}}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="div" align="center" fontFamily={"sans-serif"}>
                            <b><i>{item.title}</i></b>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center" fontFamily={"sans-serif"}>
                            {item.description}
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>))}
        </Grid>

        <Grid ref={props.aboutSectionRef} container sx={{width:'98.8vw', height:'15vh', bgcolor:'primary.dark', alignContent:'center'}} spacing={4} flexDirection={'row'} justifyContent="center">
            <Grid item size={'grow'} sx={{width:'25%'}}>
                <Typography variant="h6" color={'primary.light'} align="center" gutterBottom fontFamily={"sans-serif"}>
                <b>CONTACT US: </b>
                </Typography>
            </Grid>
            <Grid item size={'grow'} sx={{width:'25%', alignItems:'center'}}>

                <Button
                size='large'
                variant='text' 
                href='https://www.linkedin.com/in/junaid-mohammed99/'
                target="_blank"
                sx={{color:'primary.light', fontWeight:'bold', fontSize:'15px'}}
                disableRipple 
                disableFocusRipple>
                <b>Mohammed Junaid</b>
                </Button>
              
            </Grid>
            <Grid item size={'grow'} sx={{width:'25%'}}>
            <Button
                size='large'
                variant='text' 
                href='https://www.linkedin.com/in/maliha11/'
                target="_blank"
                sx={{color:'primary.light', fontWeight:'bold', fontSize:'15px'}}
                disableRipple 
                disableFocusRipple>
                <b>Maliha Mahajebin</b>
                </Button>
            </Grid>
            <Grid item size={'grow'} sx={{width:'25%'}}>
            <Button
                size='large'
                variant='text' 
                href='https://www.linkedin.com/in/ryan--ramirez/'
                target="_blank"
                sx={{color:'primary.light', fontWeight:'bold', fontSize:'15px'}}
                disableRipple 
                disableFocusRipple>
                <b>Ryan Ramirez</b>
                </Button>
            </Grid>
        </Grid>

        </Box>
      )
}

//User grid component
function UserGrid(props){

    return(
        <Grid id='toolbar-grid-right' container alignItems="center" spacing={2} sx={{ padding: 2 }}>
        <Grid item>
            <Avatar sx={{ bgcolor: '#f9f9f9', width: 56, height: 56 }}>
            <AccountCircleIcon sx={{ fontSize: 60, color: '#460071' }} />
            </Avatar>
        </Grid>
        <Grid item id="account-grid">
            <Button 
            id="account-button"
            variant='text' 
            sx={{color:'primary.light', fontWeight:'bold'}}
            disableRipple 
            disableFocusRipple
            anchorel={props.anchor3}
            aria-controls={props.menuOpen3 ? "user-account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={props.menuOpen3 ? 'true' : undefined}
            onClick={props.handlemenuClick3}>

            <b>{props.user.user_name}</b>

            </Button>

            <Menu 
            id="user-account-menu"
            anchorel={props.anchor3}
            open={props.menuOpen3}
            onClose={props.handlemenuClose3}
            anchorOrigin={{
                vertical: 'right', // Position the menu below the anchor
                horizontal: 'right', // Center the menu horizontally
              }}
              transformOrigin={{
                vertical: 'bottom', // Align the top of the menu with the bottom of the anchor
                horizontal: 'center', // Center the menu horizontally
              }}>
                 <MenuItem onClick={props.userEventsHandler}>My Events</MenuItem> 
                 <MenuItem onClick={props.logOutHandler}>Logout</MenuItem>

            </Menu>
        </Grid>
    </Grid>
    )
}

export function Resources(props){

    return(
      
        <Box id="main-box"
        sx={{display: 'flex',
          flexDirection:'column', 
          justifyContent:'center', 
          alignItems:'center',
          width:'90vw',
          height:"auto",
          marginTop:'100px',}}>

        <Grid id={'resources-main-grid'}  container justifyContent="center" sx={{width:'100%',  padding:'25px 0px'}}>
            <Grid item size={6} xs={12} sm={6} md={4}>
                <Card id={'professional-resources-grid'} sx={{ height: '100%', display: 'flex', flexDirection: 'column', margin:"0px 15px"}}>
                <CardMedia
                        component="img"
                        height="300"
                        image={'https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                        alt={'image1'}
                        sx={{objectFit:'cover'}}/>
                
                <CardContent sx={{ flexGrow: 1 }}>

                    <Typography gutterBottom variant="h5" component="div" align="center" fontFamily={"sans-serif"}>
                            <b>Professional Resources</b>
                    </Typography>

                    <Link target="_blank" href={'https://jobcenterofwisconsin.com/'}>  Job Center of Wisconsin </Link> <br/>
                    <Link target="_blank" href={'https://www.ziprecruiter.com/Jobs/Graduate-With-Visa-Sponsorship'}>  ZipRecruiter </Link><br/>
                    <Link target="_blank" href={'https://joinhandshake.com/'}> Handshake </Link><br/>
                    <Link target="_blank" href={'https://www.linkedin.com/feed/'}>  LinkedIn </Link>


                </CardContent>

                </Card>

            </Grid>

            <Grid item size={6} xs={12} sm={6} md={4}>
            <Card id={'immigration-resources-grid'} sx={{height: '100%', display: 'flex', flexDirection: 'column', margin:"0px 15px"}}>
                <CardMedia
                        component="img"
                        height="300"
                        image={'https://images.unsplash.com/photo-1450430463204-6f53fe1c2777?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                        alt={'image1'}
                        sx={{objectFit:'cover'}}/>
                
                <CardContent sx={{ flexGrow: 1 }}>

                    <Typography gutterBottom variant="h5" component="div" align="center" fontFamily={"sans-serif"}>
                            <b> Immigration Resources </b>
                    </Typography>

                    <Link target="_blank" href={'https://www.uscis.gov/citizenship'}>  Citizenship Resource Center </Link> <br/>
                    <Link target="_blank" href={'https://www.ilrc.org/'}>  Immigrant Legal Resource Center </Link><br/>
                    <Link target="_blank" href={'https://internationaloffice.berkeley.edu/students/current/f-1/regulations'}> F-1 Immigration Regulations </Link><br/>
                    <Link target="_blank" href={'https://www.linkedin.com/feed/'}>  Working in the United States - F-1 Student Employment </Link>


                </CardContent>

                </Card>
            </Grid>

        </Grid>
        </Box>
      
    )
}


