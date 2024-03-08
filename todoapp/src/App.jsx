import './App.css';
import { Filters } from './components/Filters/Filters';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import TodoList from './components/List/List';

function App() {
  return (
    <>
      <Header />
      <Filters />
      <TodoList />
      <Footer />
    </>
  );
}

export default App;
