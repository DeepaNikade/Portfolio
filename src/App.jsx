import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


import './App.css'
import AppTemplate from './Components/AppTemplate.jsx';
import Home from './Components/Home.jsx';
import Experience from './Components/Experience.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import Education from './Components/Education.jsx';

function App() {
 
  return (
  <BrowserRouter>
  <AppTemplate/>
  <Routes>
  <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
