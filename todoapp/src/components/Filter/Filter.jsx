import PropTypes from 'prop-types';
import { useState } from 'react';

function Filter({ setFilter }) {
  const [filterOptions, setFilterOptions] = useState({
    all: true,
    completed: false,
    pending: false
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;

    if (checked) {
      const updatedOptions = Object.keys(filterOptions).reduce((acc, key) => {
        acc[key] = key === name;
        return acc;
      }, {});

      setFilterOptions(updatedOptions);
      setFilter(name);
    } else {
      setFilterOptions({ all: true, completed: false, pending: false });
      setFilter('all');
    }
  };

  return (
    <div className='filter'>
      <label>
        <input
          type="checkbox"
          name="all"
          checked={filterOptions.all}
          onChange={handleChange}
        />
        All
      </label>
      <label>
        <input
          type="checkbox"
          name="completed"
          checked={filterOptions.completed}
          onChange={handleChange}
        />
        Completed
      </label>
      <label>
        <input
          type="checkbox"
          name="pending"
          checked={filterOptions.pending}
          onChange={handleChange}
        />
        Pending
      </label>
    </div>
  );
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired
};

export default Filter;
