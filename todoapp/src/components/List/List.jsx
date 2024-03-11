import { useState } from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import useInput from '../../hooks/useInput';
import useTasks from '../../hooks/useTasks';

export default function TodoList() {
  const [inputValue, setInputValue, setInput] = useInput('');
  const { tasks, addTask, deleteTask, clearAllTasks, toggleTaskCompletion } = useTasks([]);
  const [filter, setFilter] = useState('all'); // Estado del filtro

  const handleAddTask = () => {
    addTask(inputValue);
    setInput('');
  };

  const handleClearAllTasks = () => {
    clearAllTasks();
  };

  // Filtrar las tareas según el estado del filtro
  const filteredTasks = filter === 'all' ? tasks :
    filter === 'completed' ? tasks.filter(task => task.completed) :
    filter === 'pending' ? tasks.filter(task => !task.completed) :
    [];

  return (
    <div>
      <Form
        inputValue={inputValue}
        handleChange={setInputValue}
        handleAddTask={handleAddTask}
      />
      <div>
        <label htmlFor="filter">Filter: </label>
        <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
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
      <Footer tasks={tasks} clearAllTasks={handleClearAllTasks} />
    </div>
  );
}
