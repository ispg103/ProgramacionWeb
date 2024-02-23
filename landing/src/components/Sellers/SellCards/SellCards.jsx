export function SellCards (props) {
  const { sellimage, title, date, price, text, heart } = props
  return (
    <div className='sell-cards'>
      <img src={sellimage} className='sell-image' />
      <h2 className='sell-title'>{title}</h2>
      <p className='sell-date'>{date}</p>
      <h2 className='sell-price'>{price}</h2>
      <p className='sell-text'>{text}</p>
      <img src={heart} className='sell-heart' />
    </div>
  )
}
