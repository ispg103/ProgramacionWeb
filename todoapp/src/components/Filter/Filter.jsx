import PropTypes from 'prop-types';

function Filter({ filter, setFilter }) {
  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;