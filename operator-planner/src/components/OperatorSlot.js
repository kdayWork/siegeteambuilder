import React from 'react';

const OperatorSlot = ({ slot, operator, onRemove }) => {
  return (
    <div className="operator-slot">
      {operator ? (
        <div>
          <img src={operator.image} alt={operator.name} />
          <button onClick={() => onRemove(slot)}>Remove</button>
        </div>
      ) : (
        <p>Empty Slot</p>
      )}
    </div>
  );
};

export default OperatorSlot;
