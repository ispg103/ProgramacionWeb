export function CCards (props) {
  const { charurl, name } = props
  return (
    <div className='charac-cards'>
      <img src={charurl} className='char-image' />
      <h2 className='char-name'>{name}</h2>
    </div>
  )
}
