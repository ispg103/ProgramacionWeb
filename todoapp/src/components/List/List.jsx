import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Form from '../Form/Form';
import useInput from '../../hooks/useInput';
import useTasks from '../../hooks/useTasks';

export default function TodoList({ filter }) {
  const [inputValue, setInputValue, setInput] = useInput('');
  const { tasks, addTask, deleteTask, clearAllTasks, toggleTaskCompletion } = useTasks([]);

  const handleAddTask = () => {
    addTask(inputValue);
    setInput('');
  };

  return (
    <div>
      <Form
        inputValue={inputValue}
        handleChange={setInputValue}
        handleAddTask={handleAddTask}
      />
      <ul>
        {tasks
          .filter(task => filter === 'all' || (filter === 'completed' && task.completed) || (filter === 'pending' && !task.completed))
          .map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <Button type="button" text="Delete" handleClickCounter={() => deleteTask(index)} />
            </li>
          ))}
      </ul>
      <Button type="button" text="Clear All" handleClickCounter={clearAllTasks} />
      <div>
        <span>Tasks pending: {tasks.filter((task) => !task.completed).length}</span>
      </div>
    </div>
  );
}

// Define PropTypes para el prop filter
TodoList.propTypes = {
  filter: PropTypes.string.isRequired,
};