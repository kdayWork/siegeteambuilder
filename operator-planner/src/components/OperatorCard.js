import React from 'react';

const OperatorCard = ({ operator, onSelect }) => {
  return (
    <div className="operator-card" onClick={() => onSelect(operator)}>
      <img src={operator.image} alt={operator.name} 
      style={{ width: `${150}px`, height: `${250}px` }}/>

      <div className="operator-info">
        <h4>{operator.name}</h4>
        <p>{operator.description}</p>
      </div>
    </div>
  );
};

export default OperatorCard;
