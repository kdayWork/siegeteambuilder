import React from 'react';

const ScoreDisplay = ({ team }) => {
  const firepower = team.reduce((sum, op) => sum + (op?.Firepower_Rating || 0), 0);
  const intel = team.reduce((sum, op) => sum + (op?.Intel_Rating || 0), 0);
  const denial = team.reduce((sum, op) => sum + (op?.Gadget_Denial_Rating || 0), 0);
  const breach = team.reduce((sum, op) => sum + (op?.Breach_Rating || 0), 0);
  const mapControl = team.reduce((sum, op) => sum + (op?.Map_Control_Rating || 0), 0);
  const total = firepower + intel + denial + breach + mapControl;

  return (
    <div className="score-display">
      <h3>Team Score</h3>
      <ul>
        <li>Firepower: {firepower}</li>
        <li>Intel: {intel}</li>
        <li>Gadget Denial: {denial}</li>
        <li>Breach: {breach}</li>
        <li>Map Control: {mapControl}</li>
        <li><strong>Total Score: {total}</strong></li>
      </ul>
    </div>
  );
};

export default ScoreDisplay;
