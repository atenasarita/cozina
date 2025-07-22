import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Transition from './pages/Transition';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/transition" element={<Transition />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
