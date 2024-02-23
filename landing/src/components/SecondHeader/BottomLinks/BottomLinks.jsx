export function BottomLinks (props) {
  const { iconbot, linktitlebot } = props
  return (
    <div className='bottom-link'>
      <img src={iconbot} className='icon-bottom' />
      <h2 className='title-bottom'>{linktitlebot}</h2>
    </div>
  )
}
