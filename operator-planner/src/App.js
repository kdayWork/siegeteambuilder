import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import MapPlanner from './pages/MapPlanner';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="nav-buttons">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <button>Home</button>
          </Link>
          <Link to="/planner" style={{ textDecoration: 'none', color: 'white' }}>
            <button>Map Planner</button>
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<MapPlanner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
