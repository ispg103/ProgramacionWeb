export function TopLinks (props) {
  const { icon, linktitle } = props
  return (
    <div className='top-link'>
      <img src={icon} className='link-icon' />
      <h2 className='link-title'>{linktitle}</h2>
    </div>
  )
}
