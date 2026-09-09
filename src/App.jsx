import { useState } from 'react'
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster position="top-right" />
      <div>
        <Router>
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>

        </Router>
      </div>
    </>
  )
}

export default App
