import React, { useState } from 'react';

const OperatorCard = ({ operator, onSelect }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => setShowDetails(true);
  const handleMouseLeave = () => setShowDetails(false);
  const handleClick = () => onSelect(operator);
 
  return (
    <div 
      className="operator-card"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ position: 'relative', display: 'inline-block' }}>
      <img src={operator.image} alt={operator.name} 
        style={{ width: '150px', height: '250px' }}/>

      {showDetails && (
        <div 
          className="operator-info" 
          style={{ 
            position: 'absolute', 
            bottom: '10px', 
            left: '10px', 
            background: 'rgba(0, 0, 0, 0.7)', 
            color: 'white', 
            padding: '5px 10px', 
            borderRadius: '5px',
            maxWidth: '130px'
          }}>
          <h4 style={{ margin: '0 0 5px 0' }}>{operator.name}</h4>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>Side: {operator.side}</p>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>Primary Gadgets: {operator.primary_gadgets}</p>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>Secondary Gadgets: {operator.secondary_gadgets.join(', ')}</p>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>Health: {operator.health}</p>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>Speed: {operator.speed}</p>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>Guns: {operator.guns.join(', ')}</p>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>Firepower Rating: {operator.Firepower_Rating}</p>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>Intel Rating: {operator.Intel_Rating}</p>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>Gadget Denial Rating: {operator.Gadget_Denial_Rating}</p>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>Breach Rating: {operator.Breach_Rating}</p>
          <p style={{ margin: '5px 0', fontSize: '12px' }}>Map Control Rating: {operator.Map_Control_Rating}</p>
          <p style={{ margin: 0, fontSize: '12px' }}>{operator.description}</p>
        </div>
      )}
    </div>
  );
};

export default OperatorCard;
