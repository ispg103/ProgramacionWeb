export function BigNews (props) {
  const { imagenurl, date, title, text, link } = props
  return (
    <div className='big-news'>
      <img src={imagenurl} className='image-news' />
      <p className='date-news'>{date}</p>
      <h2 className='title-news'>{title}</h2>
      <p className='text-news'>{text}</p>
      <a className='link-news'>{link}</a>
    </div>
  )
}
