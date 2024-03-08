import PropTypes from 'prop-types';
import Button from '../Button/Button';

function Form({ inputValue, handleChange, handleAddTask }) {
  return (
    <>
      <section>
        <form className="TodoForm">
          <input
            type="text"
            className="Todo-input"
            placeholder="Enter your task"
            value={inputValue}
            onChange={handleChange}
          />
        </form>
        <Button type="button" text="Add Task" handleClickCounter={handleAddTask} />
      </section>
    </>
  );
}

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired,
};

export default Form; // Aquí se exporta el componente Form
