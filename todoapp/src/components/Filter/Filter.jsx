import PropTypes from 'prop-types';

function Filter({ setFilter }) {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <select id="filter" onChange={handleChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired
};

export default Filter;