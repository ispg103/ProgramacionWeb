import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { TasksContext } from './TaskContext';

const initTasks = JSON.parse(window.localStorage.getItem("tasks")) ?? [];

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initTasks);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskTitle) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      completed: false
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const clearCompletedTasks = () => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed));
  };

  return (
    <TasksContext.Provider value={{
      tasks,
      addTask,
      deleteTask,
      toggleTaskCompletion,
      clearCompletedTasks,
      filter,
      setFilter
    }}>
      {children}
    </TasksContext.Provider>
  );
};

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired
};
