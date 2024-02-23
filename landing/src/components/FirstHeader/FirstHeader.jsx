import './FirstHeader.css'
import { TopLinks } from './TopLinks/TopLinks'

export function FirstHeader () {
  return (
    <>
      <section className='first-bar'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/2560px-Nintendo.svg.png' className='image' />
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Nintendo_Logo_2017.png/640px-Nintendo_Logo_2017.png' className='image-pc' />
        <img src='https://cdn-icons-png.flaticon.com/512/54/54481.png' className='search-img' />
        <div className='search'>Search</div>
        <b><div className='categories'>All categories</div></b>
        <img src='https://cdn-icons-png.flaticon.com/512/32/32195.png' className='one' />

        <div className='link-group'>
          <TopLinks icon='https://cdn0.iconfinder.com/data/icons/entypo/92/help-512.png' linktitle='Support' />

          <TopLinks icon='https://icon-library.com/images/heart-icon-png/heart-icon-png-29.jpg' linktitle='Wish List' />

          <TopLinks icon='https://cdn-icons-png.flaticon.com/512/60/60992.png' linktitle='Cart' />

          <TopLinks icon='https://cdn-icons-png.flaticon.com/512/3106/3106921.png' linktitle='Log in / Sign up' />

        </div>

        <img src='https://cdn1.iconfinder.com/data/icons/us-state-flags-rounded-rectangles/900/united_states_america_flag_american_usa_us-512.png' className='flag' />

      </section>
    </>
  )
}
