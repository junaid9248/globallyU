import { useState } from 'react'
import {Container, Typography, Box} from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import LoginBox from './login/loginpage';
import Signup from './signup/signuppage';
import Home from './homepage/homepage';
import Signupstepper from './signup/test';
function App() {

  return (
    
<LocalizationProvider dateAdapter={AdapterDayjs}> 
    <BrowserRouter>
      <Routes>
        
        <Route path='login' element={<LoginBox />}/>
        <Route path ='signup' element={<Signup />}/>
        <Route path='/' element={<Home />} />
        <Route path='test' element={<Signupstepper />}/>
      </Routes>
    </BrowserRouter>
    </LocalizationProvider>
  )
}

export default App

