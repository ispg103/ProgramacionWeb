import PropTypes from 'prop-types';
import Button from '../Button/Button';

function Form({ inputValue, handleChange, handleAddTask }) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddTask();
    }
  };
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
            onKeyPress={handleKeyPress}
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

export default Form;
