import PropTypes from 'prop-types';

function Filter({ filter, setFilter }) {
  const handleChange = (event) => {
    setFilter(event.target.value); // Actualizar el estado del filtro cuando cambia el valor
  };

  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <select id="filter" value={filter} onChange={handleChange}>
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
