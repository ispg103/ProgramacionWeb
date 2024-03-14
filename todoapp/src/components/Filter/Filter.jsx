import PropTypes from 'prop-types';

function Filter({ options, activeFilter, setActiveFilter }) {
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className='filter'>
      <label>Filter: </label>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="checkbox"
            id={option.value}
            name="filter"
            value={option.value}
            checked={activeFilter === option.value}
            onChange={() => handleFilterChange(option.value)}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}

Filter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired,
};

export default Filter;
