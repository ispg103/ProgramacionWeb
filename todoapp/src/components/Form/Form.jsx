import { useState } from 'react';
import { useContexts } from '../../hooks/useContext';

export default function Form() {
  const [taskTitle, setTaskTitle] = useState('');
  const { addTask } = useContexts();

  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskTitle} onChange={handleInputChange} placeholder="Enter task" />
      <button type="submit">Add Task</button>
    </form>
  );
}
