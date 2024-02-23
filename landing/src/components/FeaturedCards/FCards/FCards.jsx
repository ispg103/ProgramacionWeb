export function FCards (props) {
  const { imageUrl, title, text } = props
  return (
    <div className='f-cards'>
      <img src={imageUrl} className='image-card' />
      <h2 className='f-title'>{title}</h2>
      <p className='f-text'>{text}</p>
    </div>
  )
}
