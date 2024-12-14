import React, { useState } from 'react';

const Planner = ({ savedTeam }) => {
  const [floor, setFloor] = useState(1);
  const [placements, setPlacements] = useState({});

  const handleOperatorPlacement = (operator, x, y) => {
    setPlacements({
      ...placements,
      [operator.id]: { x, y, floor },
    });
  };

  return (
    <div className="planner-page">
      <h1>Map Planner</h1>
      <label>
        Select Floor:
        <select onChange={(e) => setFloor(Number(e.target.value))}>
          <option value={1}>First Floor</option>
          <option value={2}>Second Floor</option>
        </select>
      </label>

      <div className="map-area" style={{ position: 'relative', width: '800px', height: '600px', background: '#ccc' }}>
        {savedTeam.map((operator) => {
          const placement = placements[operator.id];
          if (placement && placement.floor === floor) {
            return (
              <div
                key={operator.id}
                className="operator-marker"
                style={{
                  position: 'absolute',
                  left: `${placement.x}px`,
                  top: `${placement.y}px`,
                }}
              >
                <img src={operator.image} alt={operator.name} width="50" />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="operator-drag-list">
        <h2>Operators to Place</h2>
        {savedTeam.map((operator) => (
          <div
            key={operator.id}
            className="draggable-operator"
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData('operator', JSON.stringify(operator))
            }
          >
            <img src={operator.image} alt={operator.name} width="50" />
            <p>{operator.name}</p>
          </div>
        ))}
      </div>

      <div
        className="map-drop-zone"
        style={{
          width: '800px',
          height: '600px',
          background: '#ddd',
          marginTop: '20px',
          position: 'relative',
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const operator = JSON.parse(e.dataTransfer.getData('operator'));
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          handleOperatorPlacement(operator, x, y);
        }}
      />
    </div>
  );
};

export default Planner;
