import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ReadPage from './ReadPage';
import NavigationBar from './NavigationBar';
import LegoPage from './LegoPage';

function App() {
  
  return (
    
    <Router basename = "/PoC-Keyboards">
      <NavigationBar />
       <Routes>
          <Route index element={<Home />} />
          <Route path="/things-to-read" element={<ReadPage />} />
          <Route path="/interest-page" element={<LegoPage />} />
        </Routes>
    </Router>

  );
}

export default App;
