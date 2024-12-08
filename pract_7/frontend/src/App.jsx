import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import BottomMenu from './components/BottomMenu';
import Login from './pages/Login'; 
import Signup from './pages/Signup';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
         (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
         
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/learning/:type" element={<Learning />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/profile" element={<Profile />} />
            </>
          )
        </Routes>
        
              <BottomMenu />
            
          
        
      </div>
    </Router>
  );
}

export default App;
