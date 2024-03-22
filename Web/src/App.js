import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from 'layouts/dashboard';
import './App.css';
import routes from './routes'; 
import ContactUs from 'views/contactUs/ContactUs';
import AboutUs from 'views/aboutUs/AboutUs';
import Home from 'views/home/Home';
import Registration from 'Registeration';



function App() {
  return (
  

    <div className="App">
      
      
      <Routes>
      <Route path="home/*" element={<AdminLayout />} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/registration" element={<Registration/>} />
      
    </Routes>

     
    </div>
  );
}

export default App;
