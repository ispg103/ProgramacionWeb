import './App.css';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import TodoList from './components/List/List';

function App() {


  return (
    <>
      <Header />
      <TodoList />
      <Footer />
    </>
  );
}

export default App;
