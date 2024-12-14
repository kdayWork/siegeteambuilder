import React from 'react';

const FilterBar = ({ filters, setFilters }) => {
  const updateFilter = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="filter-bar">
      <label>
        Role:
        <select name="role" onChange={updateFilter}>
          <option value="">All</option>
          <option value="breach">Breach</option>
          <option value="gadget denial">Gadget Denial</option>
          <option value="map control">Map Control</option>
          <option value="intel">Intel</option>
          <option value="fire power">Fire Power</option>
        </select>
      </label>
      <label>
        Side:
        <select name="side" onChange={updateFilter}>
          <option value="">All</option>
          <option value="attacker">Attacker</option>
          <option value="defender">Defender</option>
        </select>
      </label>
    </div>
  );
};

export default FilterBar;
