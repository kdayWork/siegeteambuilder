import React, { useState } from 'react';
import { operators } from '../data/operators';
import OperatorCard from '../components/OperatorCard';
import OperatorSlot from '../components/OperatorSlot';
import FilterBar from '../components/FilterBar';
import ScoreDisplay from '../components/ScoreDisplay';

const Home = () => {
  const [filters, setFilters] = useState({ role: '', side: '' });
  const [filteredOperators, setFilteredOperators] = useState(operators);
  const [team, setTeam] = useState([null, null, null, null, null]);

  const handleSelect = (operator) => {
    const isOperatorSelected = team.some((op) => op?.id === operator.id);
    if (isOperatorSelected) {
      alert('Operator already selected!');
      return;
    }

    const emptySlotIndex = team.findIndex((slot) => slot === null);
    if (emptySlotIndex !== -1) {
      const updatedTeam = [...team];
      updatedTeam[emptySlotIndex] = operator;
      setTeam(updatedTeam);
    }
  };

  const handleRemove = (slotIndex) => {
    const updatedTeam = [...team];
    updatedTeam[slotIndex] = null;
    setTeam(updatedTeam);
  };

  return (
    <div className="home-page">
      <h1>Operator Team Builder</h1>
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        operators={operators}
        setFilteredOperators={setFilteredOperators}
      />
      
      <div className="operator-list">
        {filteredOperators.map((operator) => (
          <OperatorCard
            key={operator.id}
            operator={operator}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <h2>Your Team</h2>
      <div className="operator-slots">
        {team.map((operator, index) => (
          <OperatorSlot
            key={index}
            slot={index}
            operator={operator}
            onRemove={handleRemove}
          />
        ))}
      </div>

      <ScoreDisplay team={team} />
    </div>
  );
};

export default Home;
