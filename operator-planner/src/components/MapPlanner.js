import React, { useState } from 'react';

const MapPlanner = ({ savedTeam }) => {
  const [floor, setFloor] = useState(1);

  return (
    <div className="map-planner">
      <h2>Map Planner</h2>
      <select onChange={(e) => setFloor(e.target.value)}>
        <option value={1}>First Floor</option>
        <option value={2}>Second Floor</option>
      </select>
      <div className="map-area">
        {savedTeam.map((operator) => (
          <div key={operator.id} className="operator-on-map">
            <img src={operator.image} alt={operator.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapPlanner;
