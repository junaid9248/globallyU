import { useState } from 'react'
import {createTheme,ThemeProvider, Card, CardContent, CardMedia, CardActions,Typography, Button, Box,Alert, Snackbar } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { deepOrange } from '@mui/material/colors';
import Grid from '@mui/material/Grid2'


export default function EventsList(){

    

    const events = [
        {
            imageUrl: 'https://images.pexels.com/photos/5718104/pexels-photo-5718104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Thanksgiving Dinner',
            description: 'A dinner party for all looking to dig into delicious thanksgiving food ',
            dateTime: 'November 20/2024, 8:00 PM',
            location:'Holthusen Hall, Marquette University'
        },
        
        {
        imageUrl: 'https://images.pexels.com/photos/4078516/pexels-photo-4078516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Diwali celebration event',
        description: 'A fun-filled Diwali celebration event for all ages! ',
        dateTime: 'November 25/2024, 7:00 PM',
        location:'AMU Ballrooms, Marquette University'
    },

    {
        imageUrl: 'https://images.unsplash.com/photo-1520110120835-c96534a4c984?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'International Students Networking Mixer',
        description: 'Connect, network, and share experiences with fellow international students.',
        dateTime: 'January 15/2025, 6:30 PM',
        location: 'AMU Henke Lounge, Marquette University'
    },

    {
        imageUrl: 'https://images.unsplash.com/photo-1678646142794-253fdd20fa05?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'International Food Festival',
        description: 'Explore cuisines from around the world with live cooking demos and tasting sessions!',
        dateTime: 'December 12/2024, 4:00 PM',
        location: 'Veterans Park, Milwaukee'
    }
    

    ];

    const [openAlert1, setOpenAlert1] = useState(false);
    const [openAlert2, setOpenAlert2] = useState(false);

    const addEventHandler =()=>{

        setOpenAlert1(true); // Show the alert when form is submitted

        // Automatically close the alert after 3 seconds
        setTimeout(() => {
        setOpenAlert1(false);
        }, 2000);
    }

    const markEventHandler =()=>{

        setOpenAlert2(true); // Show the alert when form is submitted

        // Automatically close the alert after 3 seconds
        setTimeout(() => {
        setOpenAlert2(false);
        }, 2000);
    }

    return(
        <Box id="main-box"
        sx={{display: 'flex',
          flexDirection:'row', 
          justifyContent:'center', 
          alignItems:'center',
          width:'95vw',
          height:"auto",}}>

        <Snackbar open={openAlert1} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert severity="success" variant="filled">
                    You have successfully registered for the event! <br/>
                </Alert>
        </Snackbar>

        <Snackbar open={openAlert2} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Alert severity="info" variant="filled">
            This event has been bookmarked for you
          </Alert>
        </Snackbar>

            <Grid container sx={{width: "75vw"}} justifyContent={'center'} spacing={1}>
            {events.map((event, index)=>(
                <Grid key={index} sx={{width:'auto'}}>
                     <EventCard event={event} addEventHandler={addEventHandler} markEventHandler={markEventHandler}/>
                </Grid>))}
            </Grid>
        </Box>
        
    )
}

//Child components
function EventCard(props){

    const myTheme = createTheme({

        palette:{

            primary:{
                light: '#f9f9f9',
                dark:'#460071',
                main: "#4a148c"
    
            },

            secondary:
            {main:deepOrange[500]
            }
        },

    })


    return(
    <ThemeProvider theme={myTheme}>
        <Card  
        sx={{ display: 'flex', flexDirection: 'row', justifyContent:'center' , alignItems:'center', width: '100%', m: 2, boxShadow:3, borderRadius:'10px' }}>
        
        <CardMedia
        component="img"
        image={props.event.imageUrl}
        alt={props.event.title}
        sx={{ width: '40%', height: '100%' }}/>

        <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <Grid>
            <CardContent>
            <Typography variant="h6" gutterBottom>
                <b>{props.event.title}</b>
            </Typography>
            <Typography variant="body2" color="text.secondary" >
                {props.event.description}
            </Typography>
            <Typography variant="body2" color="text.primary">
                <b>Date & Time:</b> {props.event.dateTime}
            </Typography>
            <Typography variant="body2" color="text.primary">
                <b>Location:</b> {props.event.location}
            </Typography>
            </CardContent>
        </Grid>

        <Grid>
        <CardActions sx={{ display:'flex',flexDirection:'row',justifyContent: 'center', alignItems:'center' }}>
            <Button onClick={props.addEventHandler} startIcon={<PersonAddIcon />} size="large" variant="contained" color="success" sx={{margin:'0.5rem'}}>
            Join Event
            </Button>
            <Button onClick={props.markEventHandler} startIcon={<BookmarkAddIcon/>} 
            size="large" variant="contained" color='secondary'>
            Add to bookmarks
            </Button>
        </CardActions>
        </Grid>

        </Grid>

    </Card>
    </ThemeProvider>
)
} 
