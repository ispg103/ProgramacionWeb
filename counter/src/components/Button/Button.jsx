import PropTypes from 'prop-types'

export function Button ({ type, text, handleClickCounter }) {
  const handleClick = () => {
    handleClickCounter(type)
  }
  return (
    <button onClick={handleClick} type={type} id={`button${type}`} className='button'>{text}</button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClickCounter: PropTypes.func.isRequired
}
