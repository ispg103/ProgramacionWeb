import './Sellers.css'
import { SellCards } from './SellCards/SellCards'

export function Sellers () {
  return (
    <>
      <h1 className='sell-bigtitle'>Digital best sellers</h1>

      <section className='all-sell-card'>
        <SellCards sellimage='https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000003402/057249cf707a2a733c876c0eb453bb018ee6ea09f3aea5c350f4d76f70840d00' title='Overcooked! 2' date='8/7/18' price='$24.99' text='Nintendo Switch' heart='https://freesvg.org/img/heart-icon.png' />

        <SellCards sellimage='https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000068688/87e8aa5f1fdc950b88eae7d7c62ed185c8a6373c845090bbdb2e2cf039b38da1' title='Super Mario Bros.™ Wonder' date='10/20/23' price='$59.99' text='Nintendo Switch' heart='https://freesvg.org/img/heart-icon.png' />

        <SellCards sellimage='https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000049931/cf8adb2c74522b91412eb40b9d77216e8f8436fc4e63731e0dc262e6666930eb' title='Nintendo Switch™ Sports' date='4/29/22' price='$39.99' text='Nintendo Switch' heart='https://freesvg.org/img/heart-icon.png' />

        <SellCards sellimage='https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000000153/de697f487a36d802dd9a5ff0341f717c8486221f2f1219b675af37aca63bc453' title='Mario Kart™ 8 Deluxe' date='4/28/17' price='$59.99' text='Nintendo Switch' heart='https://freesvg.org/img/heart-icon.png' />

      </section>
    </>
  )
}
