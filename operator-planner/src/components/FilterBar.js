import React from 'react';

const FilterBar = ({ filters, setFilters, operators, setFilteredOperators }) => {
  const updateFilter = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });

    // Filtering operators by side
    let filtered = operators.filter(
      (operator) =>
        (!value || operator.side.toLowerCase() === value.toLowerCase())
    );

    // Sorting by Firepower Rating (highest to lowest)
    filtered = filtered.sort((a, b) => b.Firepower_Rating - a.Firepower_Rating);

    setFilteredOperators(filtered);
  };

  return (
    <div className="filter-bar">
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
