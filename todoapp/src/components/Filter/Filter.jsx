import PropTypes from 'prop-types';
import { useState } from 'react';

function Filter({ filter, setFilter }) {
  const [selectedFilter, setSelectedFilter] = useState(filter);

  const handleCheckboxChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedFilter(selectedValue);
    setFilter(selectedValue);
  };

  return (
    <div className='filter'>
      <div>
        <label>
          <input
            type="radio"
            name="filter"
            value="all"
            checked={selectedFilter === 'all'}
            onChange={handleCheckboxChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="completed"
            checked={selectedFilter === 'completed'}
            onChange={handleCheckboxChange}
          />
          Completed
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="pending"
            checked={selectedFilter === 'pending'}
            onChange={handleCheckboxChange}
          />
          Pending
        </label>
      </div>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
