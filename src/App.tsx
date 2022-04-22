import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

import Home from './pages/Home/home';
import AboutUs from './pages/AboutUs/aboutUs';
import GetStarted from './pages/getStarted';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/aboutus" element={<AboutUs/>} />
          <Route path ="/getStarted" element={<GetStarted/>} />
          <Route path ="/contact" element={<Contact/>} />
        </Routes>
      </main>
    
    
    </Router>
  );
}

export default App;
