import PropTypes from 'prop-types';
import Button from '../Button/Button';

function Form({ inputValue, handleChange, handleAddTask }) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      event.preventDefault();
      handleAddTask();
    }
  };

  const isInputEmpty = inputValue.trim() === '';

  return (
    <>
      <section>
        <form className="TodoForm">
          <input
            type="text"
            className="todo-input"
            placeholder="Enter your task"
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </form>
        <Button
          type="button"
          text="Add Task"
          handleClickCounter={handleAddTask}
          disabled={isInputEmpty}
        />
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