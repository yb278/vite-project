import React from 'react';
//The ones needed for my basic pages
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//Ones needed for themes
import './custom.scss';  
import './App.css'
//Pages
import Darkmode from './components/Darkmode';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Email from './components/Email';
import Accordion from './components/Accordion';


function App(){
  
  return (
    <div>
      <Hero/>
      <Darkmode/><br/>
      <Carousel/><br/>
      <Accordion/><br/>
      <Email/>
    </div>
  );
}

export default App;