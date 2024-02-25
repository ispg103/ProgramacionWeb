import { useState } from 'react'
import './HelpBar.css'
import { LINKS } from '../../const/links'

export function HelpBar () {
  const [showMenu, setShowMenu] = useState(false)

  console.log('state value:', showMenu)

  const handleShowMenu = (event) => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <nav className='help-bar'>

        <button onClick={handleShowMenu} className='burguer-menu'>
          <img src='https://cdn-icons-png.flaticon.com/512/8979/8979038.png' className='hamburguer' />
        </button>

        <img src='https://icon-library.com/images/heart-icon-png/heart-icon-png-29.jpg' className='wish-icon' />

        <div className='search-white'>
          <img src='https://static-00.iconduck.com/assets.00/search-icon-1023x1024-cz5u4134.png' className='search-icon' />
        </div>

        <img src='https://cdn-icons-png.flaticon.com/512/60/60992.png' className='cart-icon' />

        <img src='https://cdn-icons-png.flaticon.com/512/3106/3106921.png' className='profile-icon' />

      </nav>

      <header>
        <Menu
          items={LINKS}
          showMenu={showMenu}
        />
      </header>

    </>
  )
}

function Menu ({ items, showMenu }) {
  return (
    <nav className={!showMenu ? 'hidden' : ''}>
      <ul>
        {
            items.map((item) =>
              <MenuItem
                item={item}
                key={item.id}
              />)
      }
      </ul>
    </nav>
  )
}

function MenuItem ({ item }) {
  const { image, text, arrow } = item
  return (
    <li>
      <img src={image} className='images' />
      <a href=''>{text}</a>
      <img src={arrow} className='arrow' />
    </li>
  )
}
