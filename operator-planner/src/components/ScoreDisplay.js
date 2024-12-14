import React from 'react';

const ScoreDisplay = ({ team }) => {
  const scores = {
    breach: 0,
    'gadget denial': 0,
    'map control': 0,
    intel: 0,
    'fire power': 0,
  };

  team.forEach((operator) => {
    if (operator) {
      scores[operator.role] += 1;
    }
  });

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  return (
    <div className="score-display">
      <h3>Team Scores</h3>
      <ul>
        {Object.entries(scores).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <h4>Total Score: {totalScore}</h4>
    </div>
  );
};

export default ScoreDisplay;
