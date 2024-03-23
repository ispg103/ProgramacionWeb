import PropTypes from 'prop-types';
import { useContexts } from "../../hooks/useContext";
import useInput from '../../hooks/useInput';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';
import { TasksContext } from '../../context/TaskContext';

export default function TodoList({ filter }) {
  const [inputValue, setInputValue, setInput] = useInput('');
  const { tasks, addTask, deleteTask, toggleTaskCompletion } = useContexts(TasksContext);

  const handleAddTask = () => {
    addTask(inputValue);
    setInput('');
  };

  const handleClearCompletedTasks = () => {
    tasks.forEach(task => {
      if (task.completed) {
        deleteTask(task.id);
      }
    });
  };

  const hasTasks = tasks.length > 0;

  function NoTasksMsg() {
    return <p>Sorry, there are not any tasks. Add some!!</p>;
  }

  return (
    <div>
      <Form
        inputValue={inputValue}
        handleChange={setInputValue}
        handleAddTask={handleAddTask}
      />
      {hasTasks ? (
        <ul>
          {tasks
            .filter(task => filter === 'all' || (filter === 'completed' && task.completed) || (filter === 'pending' && !task.completed))
            .map((task) => (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.title}
                </span>
                <Button type="button" text="Delete" handleClick={() => deleteTask(task.id)} />
              </li>
            ))}
        </ul>
      ) : (
        <NoTasksMsg />
      )}
      <div>
        <Footer tasks={tasks} clearCompletedTasks={handleClearCompletedTasks} />
      </div>
    </div>
  );
}

TodoList.propTypes = {
  filter: PropTypes.string.isRequired,
};
