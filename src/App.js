import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services';
import Business from './components/Business';
import Attract from './components/Attract';
import Grow from './components/Grow';
function App() {
  return (
    <React.Fragment> 
      <NavBar/>
      <Routes> 
      <Route path="/" element={<> 
      <Home/>
      <Services/>
      <Business/>
      <Attract/>
      <Grow/>
      </>}/>
      </Routes>

    </React.Fragment>
  );
}

export default App;
