import './Store.css'
import { BigCards } from '../BigCards/BigCards'

export function Store () {
  return (
    <>
      <section className='online-store'>
        <BigCards className='cell-look' title='Online store' imageburl='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/merchandising/MNS_mobile_TEST' text='Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over.' button='Start shopping' />
      </section>

      <section className='online-store-pc'>
        <BigCards className='pc-look' title='Online store' imageburl='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_1200/ncom/en_US/merchandising/MNS_desktop_TEST' text='Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over.' button='Start shopping' />
      </section>
    </>
  )
}
