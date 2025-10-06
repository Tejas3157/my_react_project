import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/About' element={<About/>} />
          <Route path='/Skills' element={<Skills/>} />
         <Route path='/Contact' element={<Contact/>} />
       </Routes>
    </div>
  );
}

export default App;
