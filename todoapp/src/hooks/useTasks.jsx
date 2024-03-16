import { useState, useEffect } from 'react';

export function useTasks(initialTasks = []) {
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim() !== '') {
      setTasks([...tasks, { text, completed: false }]);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return { tasks, addTask, deleteTask, clearAllTasks, toggleTaskCompletion };
}

export default useTasks;