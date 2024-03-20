import { useState } from 'react';
import Filter from './components/Filter/Filter';
import TodoList from './components/List/List';
import { Header } from './components/Header/Header';
import useTasks from './hooks/useTasks';
import './App.css'


export default function App() {
  const { tasks } = useTasks([]);
  const [filter, setFilter] = useState('all');

  return (
    <div>
      <Header />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList tasks={tasks} filter={filter} />
    </div>
  );
}