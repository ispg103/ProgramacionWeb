import './HelpBar.css'

export function HelpBar () {
  return (
    <>
      <nav className='help-bar'>

        <img src='https://cdn-icons-png.flaticon.com/512/8979/8979038.png' className='hamburguer' />

        <img src='https://icon-library.com/images/heart-icon-png/heart-icon-png-29.jpg' className='wish-icon' />

        <div className='search-white'>
          <img src='https://static-00.iconduck.com/assets.00/search-icon-1023x1024-cz5u4134.png' className='search-icon' />
        </div>

        <img src='https://cdn-icons-png.flaticon.com/512/60/60992.png' className='cart-icon' />

        <img src='https://cdn-icons-png.flaticon.com/512/3106/3106921.png' className='profile-icon' />

      </nav>
    </>
  )
}
