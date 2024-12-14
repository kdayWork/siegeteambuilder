import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import MapPlanner from './pages/MapPlanner';

function App() {
  const [savedTeam, setSavedTeam] = useState([]);

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/planner">Map Planner</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Home savedTeam={savedTeam} setSavedTeam={setSavedTeam} />}
          />
          <Route
            path="/planner"
            element={<MapPlanner savedTeam={savedTeam} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
