/* eslint-disable @typescript-eslint/no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar.tsx';
import Cards from './components/Cards.tsx';
import Home from './components/Home.tsx';
import Login from './components/Login.tsx';
import RegisterForm from './components/RegisterForm.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Cards/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
      </Routes>
     </BrowserRouter>
  </StrictMode>
)
