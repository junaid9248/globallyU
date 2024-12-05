import {createTheme,ThemeProvider, Typography, Box, Button, OutlinedInput, Menu, MenuItem, AppBar, Toolbar, Card, CardContent, CardMedia, Avatar} from "@mui/material"

export function Resources(){

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
        <Box id="main-box"
        sx={{display: 'flex',
          flexDirection:'column', 
          justifyContent:'center', 
          alignItems:'center',
          width:'95vw',
          height:"auto",
          marginTop:'100px',}}>

        <Grid container justifyContent="center" sx={{width:'100%',  padding:'25px 0px', margin:'25px 0px',boxShadow:3}}>
            <Grid item size={2} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                </Card>

            </Grid>

            <Grid item size={2} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                </Card>
            </Grid>

        </Grid>
        </Box>
        </ThemeProvider>
    )
}