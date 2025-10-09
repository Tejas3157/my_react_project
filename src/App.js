import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './components/Navbar'
import './components/Footer'
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={
        <>
          <About/>
          <Skills/>
          <Contact/>
          <Card/>
        </>
      }/>
  
      <Route path='/About' element={<About />} />
      <Route path='/Skills' element={<Skills />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Card' element={<Card />} />
   
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
