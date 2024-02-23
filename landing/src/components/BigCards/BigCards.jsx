export function BigCards (props) {
  const { title, imageburl, text, button } = props
  return (
    <div className='big-cards'>
      <h1 className='title-big'>{title}</h1>
      <img src={imageburl} className='b-image-card' />
      <h2 className='text-big'>{text}</h2>
      <button className='button-big'>{button}</button>
    </div>
  )
}
