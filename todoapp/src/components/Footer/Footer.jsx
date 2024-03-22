import PropTypes from 'prop-types';
import { useContexts } from '../../hooks/useContext';
import Button from '../Button/Button';

function Footer() {
  const { tasks, clearCompletedTasks } = useContexts();
  const tasksPending = tasks.filter(task => !task.completed).length;

  const handleClearCompletedTasks = () => {
    tasks.forEach(task => {
      if (task.completed) {
        clearCompletedTasks(task.id);
      }
    });
  };

  return (
    <div className='footer'>
      <span>Tasks pending: {tasksPending}</span>
      <Button type="button" text="Clear Completed" handleClick={handleClearCompletedTasks} />
    </div>
  );
}

Footer.propTypes = {
  tasks: PropTypes.array.isRequired,
  clearCompletedTasks: PropTypes.func.isRequired,
};

export default Footer;
