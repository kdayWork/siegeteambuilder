import React, { useState } from 'react';
import { maps } from '../data/maps';
import { operators } from '../data/operators';

const MapPlanner = () => {
  const [selectedMap, setSelectedMap] = useState(maps[0]);
  const [selectedFloor, setSelectedFloor] = useState(maps[0].floors[0]);
  const [placements, setPlacements] = useState({});

  const handleOperatorDrop = (operator, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPlacements((prev) => ({
      ...prev,
      [operator.id]: { x, y, floor: selectedFloor.name, icon: operator.icon },
    }));
  };

  const handleDragEnd = (id, e) => {
    const rect = e.currentTarget.parentElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPlacements((prev) => ({
      ...prev,
      [id]: { ...prev[id], x, y },
    }));
  };

  const clearOperators = () => {
    setPlacements({});
  };

  return (
    <div className="map-planner">
      <h1>Map Planner</h1>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Select a Map:
          <select
            onChange={(e) => {
              const map = maps.find((m) => m.name === e.target.value);
              setSelectedMap(map);
              setSelectedFloor(map.floors[0]);
              setPlacements({});
            }}
          >
            {maps.map((map) => (
              <option key={map.name} value={map.name}>
                {map.name}
              </option>
            ))}
          </select>
        </label>

        <label style={{ marginLeft: '20px' }}>
          Select a Floor:
          <select
            onChange={(e) =>
              setSelectedFloor(
                selectedMap.floors.find((floor) => floor.name === e.target.value)
              )
            }
            value={selectedFloor.name}
          >
            {selectedMap.floors.map((floor) => (
              <option key={floor.name} value={floor.name}>
                {floor.name}
              </option>
            ))}
          </select>
        </label>

        <button
          onClick={clearOperators}
          style={{
            marginLeft: '20px',
            padding: '5px 10px',
            backgroundColor: '#ff4d4f',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Clear Map
        </button>
      </div>

      <div
        className="map-blueprint"
        style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          background: `url(${selectedFloor.image}) no-repeat center/contain`,
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const operator = JSON.parse(e.dataTransfer.getData('operator'));
          handleOperatorDrop(operator, e);
        }}
      >
        {Object.entries(placements).map(([id, { x, y, floor, icon }]) =>
          floor === selectedFloor.name ? (
            <img
              key={id}
              src={icon}
              alt={`Operator ${id}`}
              draggable
              onDragEnd={(e) => handleDragEnd(id, e)}
              style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                width: '50px',
                cursor: 'grab',
              }}
            />
          ) : null
        )}
      </div>

      <div className="operator-list" style={{ textAlign: 'center' }}>
        <h3>Available Operators</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {operators.map((operator) => (
            <div
              key={operator.id}
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData('operator', JSON.stringify(operator))
              }
              style={{ textAlign: 'center', cursor: 'grab' }}
            >
              <img
                src={operator.icon}
                alt={operator.name}
                style={{ width: '50px', marginBottom: '5px' }}
              />
              <p>{operator.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapPlanner;
