import {  createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginBox from './login/loginpage';
import Signup from './signup/signuppage';
import Home from './homepage/homepage';
import Signupstepper from './signup/test';
import { useState } from "react";

export const AuthContext = createContext();

function App() {

  //User object and functions
  const [user, setUser] = useState({ 
    user_name : " ",
    user_pass : " "})

  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{isLogged, setIsLogged, user, setUser}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<LoginBox />}/>
        <Route path ='signup' element={<Signup />}/>
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
 
  )
}

export default App

