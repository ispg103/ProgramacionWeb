export function LittleNews (props) {
  const { imagenlurl, date, title, link } = props
  return (
    <div className='little-news'>
      <img src={imagenlurl} className='img-l-news' />
      <p className='date-l-news'>{date}</p>
      <h2 className='title-l-news'>{title}</h2>
      <a className='link-l-news'>{link}</a>
    </div>
  )
}
