import { useState } from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import useInput from '../../hooks/useInput';
import useTasks from '../../hooks/useTasks';
import Filter from '../Filter/Filter';

export default function TodoList() {
  const [inputValue, setInputValue, setInput] = useInput('');
  const { tasks, addTask, deleteTask, clearAllTasks, toggleTaskCompletion } = useTasks([]);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleAddTask = () => {
    addTask(inputValue);
    setInput('');
  };

  const handleClearAllTasks = () => {
    clearAllTasks();
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <div className='body'>
        <Form
          inputValue={inputValue}
          handleChange={setInputValue}
          handleAddTask={handleAddTask}
        />
        <Filter
          options={[
            { value: 'all', label: 'All' },
            { value: 'completed', label: 'Completed' },
            { value: 'pending', label: 'Pending' },
          ]}
          activeFilter={activeFilter}
          setActiveFilter={handleFilterChange}
        />
        <ul>
          {tasks
            .filter(task => activeFilter === 'all' || (activeFilter === 'completed' && task.completed) || (activeFilter === 'pending' && !task.completed))
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
      </div>
      <Footer tasks={tasks} clearAllTasks={handleClearAllTasks} />
    </>
  );
}
