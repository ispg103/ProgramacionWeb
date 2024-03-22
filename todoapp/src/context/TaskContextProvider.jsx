import PropTypes from 'prop-types';
import { useEffect, useReducer } from 'react';
import { TasksContext } from './TaskContext';
import { reducerTask } from '../reducer/tasksReducer';
import { TASK_ACTIONS } from "../consts/taskActions";


const initTasks = JSON.parse(window.localStorage.getItem("tasks")) ?? [];

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducerTask, initTasks); // Use reducer instead of useState

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskTitle) => {
    dispatch({ type: TASK_ACTIONS.CREATE_TASK, payload: taskTitle });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: TASK_ACTIONS.DELETE_TASK, payload: taskId });
  };

  const toggleTaskCompletion = (taskId) => {
    dispatch({ type: TASK_ACTIONS.TOGGLE_TASK, payload: taskId });
  };

  const clearCompletedTasks = () => {
    dispatch({ type: TASK_ACTIONS.CLEAR_COMPLETED_TASKS });
  };

  return (
    <TasksContext.Provider value={{
      tasks,
      addTask,
      deleteTask,
      toggleTaskCompletion,
      clearCompletedTasks,
    }}>
      {children}
    </TasksContext.Provider>
  );
};

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired
};
