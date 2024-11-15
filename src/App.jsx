import React from 'react';
//The ones needed for my basic pages
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//Ones needed for themes
import './custom.scss';  
import './App.css'

//Pagination
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/home';
import { Page2 } from './Pages/page2';
import { Page3 } from './Pages/page3';

import Totop from './components/Totop';
import Email from './components/Email';

function App(){
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/2" element={<Page2/>}/>
        <Route path="/3" element={<Page3/>}/>
      </Routes>
    </Router>
    <Email/>
    <Totop/>
   

    </>
  );
}


export default App;