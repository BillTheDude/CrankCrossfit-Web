import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

import Home from './pages/Home/home';
import AboutUs from './pages/AboutUs/aboutUs';
import GetStarted from './pages/GetStarted/getStarted';
import Contact from './pages/Contact/contact';
import Schedule from './pages/Schedule/schedule';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path = "/schedule" element={<Schedule/>} />
          <Route path ="/aboutUs" element={<AboutUs/>} />
          <Route path ="/getStarted" element={<GetStarted/>} />
          <Route path ="/contact" element={<Contact/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
