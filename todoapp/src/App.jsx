import { useState, useContext } from 'react';
import Filter from './components/Filter/Filter';
import TodoList from './components/List/List';
import { Header } from './components/Header/Header';
import { TasksContext } from './context/TaskContext';
import './App.css'

export default function App() {
  const { tasks } = useContext(TasksContext);
  const [filter, setFilter] = useState('all');

  return (
    <div>
      <Header />
      <Filter setFilter={setFilter} />
      <TodoList tasks={tasks} filter={filter} />
    </div>
  );
}
