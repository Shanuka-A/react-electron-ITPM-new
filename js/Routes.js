import { Routes, Route, Link, MemoryRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Navbar from './pages/Navbar';


export default function RouterFile() {
  return (
    <div>
      <MemoryRouter>
        
        <div>
       <Navbar/>
          
        </div>
        <Routes>
          {/* Set the index route for the root path */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MemoryRouter>
    </div>
  );
}
