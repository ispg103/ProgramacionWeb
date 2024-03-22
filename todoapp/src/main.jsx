import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { TasksProvider } from './context/TaskContextProvider.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(


    <TasksProvider>
      <App />
    </TasksProvider>

);
