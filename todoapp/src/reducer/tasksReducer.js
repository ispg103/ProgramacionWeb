import { TASK_ACTIONS } from "../consts/taskActions";

const reducerTask = (tasks, action) => {
  if (action.type === TASK_ACTIONS.CREATE_TASK) {
    const newTask = {
      id: crypto.randomUUID(),
      title: action.payload,
      completed: false
    };
    return [...tasks, newTask];
  }

  if (action.type === TASK_ACTIONS.TOGGLE_TASK) {
    return tasks.map(task =>
      task.id === action.payload ? { ...task, completed: !task.completed } : task
    );
  }

  if (action.type === TASK_ACTIONS.DELETE_TASK) {
    return tasks.filter(task => task.id !== action.payload);
  }

  if (action.type === TASK_ACTIONS.CLEAR_COMPLETED_TASKS) {
    return tasks.filter(task => !task.completed);
  }


  return tasks;
};

export { reducerTask };
