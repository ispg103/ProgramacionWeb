import PropTypes from 'prop-types';
import Button from '../Button/Button';

function Footer({ tasks, clearAllTasks }) {
  const tasksPending = tasks.filter(task => !task.completed).length;

  return (
    <div className='footer'>
      <span>Tasks pending: {tasksPending}</span>
      <Button type="button" text="Clear All" handleClickCounter={clearAllTasks} />
    </div>
  );
}

Footer.propTypes = {
  tasks: PropTypes.array.isRequired,
  clearAllTasks: PropTypes.func.isRequired,
};

export default Footer;
