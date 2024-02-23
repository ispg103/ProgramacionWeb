import './SecondHeader.css'
import { BottomLinks } from './BottomLinks/BottomLinks'

export function SecondHeader () {
  return (
    <>
      <section className='second-bar'>

        <div className='store'>
          <BottomLinks iconbot='https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/buy-512.png' linktitlebot='My Nintendo Store' />
          <img src='https://cdn-icons-png.flaticon.com/512/32/32195.png' className='two' />
        </div>

        <div className='games'>
          <BottomLinks iconbot='https://cdn-icons-png.flaticon.com/512/434/434884.png' linktitlebot='Games' />
          <img src='https://cdn-icons-png.flaticon.com/512/32/32195.png' className='three' />
        </div>

        <div className='switch'>
          <BottomLinks iconbot='https://cdn.icon-icons.com/icons2/2648/PNG/512/logo_nintendo_switch_icon_160744.png' linktitlebot='Nintendo Switch' />
          <img src='https://cdn-icons-png.flaticon.com/512/32/32195.png' className='four' />
        </div>

        <div className='news'>
          <BottomLinks iconbot='https://icons.veryicon.com/png/o/miscellaneous/blackcat/comment-44.png' linktitlebot='News & Events' />
        </div>

        <div className='nintendo'>
          <BottomLinks iconbot='https://cdn1.iconfinder.com/data/icons/devices-gaming-solid/24/gaming-star-solid-512.png' linktitlebot='Play Nintendo' />
          <img src='https://cdn-icons-png.flaticon.com/512/32/32195.png' className='five' />
        </div>

      </section>
    </>
  )
}
