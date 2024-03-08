import PropTypes from 'prop-types';

export default function Button({ type, text, handleClickCounter }) {
  const handleClick = () => {
    handleClickCounter(type);
  };

  return (
    <button onClick={handleClick} type={type} className='button'>
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClickCounter: PropTypes.func.isRequired,
};
