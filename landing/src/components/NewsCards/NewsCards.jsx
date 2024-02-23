import './NewsCards.css'
import { LittleNews } from './LittleNews/LittleNews'

export function NewsCards () {
  return (
    <>
      <section className='all-n-cards'>
        <section className='top-cards'>
          <LittleNews imagenlurl='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/articles/2023/pluck-a-free-pikmin-4-calendar-wallpaper-each-month/WN_Banner_MN_Pikmin_FebCalendar' date='02/01/24' title='Pluck a free Pikmin 4 calendar wallpaper for this month!' link='Read more' />

          <LittleNews imagenlurl='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/articles/2024/mobilenews-engage-heroes-and-7th-anniversary-celebration-events-come-to-fire-emblem-heroes/20240109_7th_2250x1266_Ncom' date='01/31/24' title='Engage Heroes and 7th Anniversary Celebration events come to Fire Emblem Heroes' link='Read more' />
        </section>

        <section className='bottom-cards'>
          <LittleNews imagenlurl='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/articles/2024/coming-soon-nintendo-switch-games-arriving-in-february-2024/2250x1266_comingSoon_Feb2024' date='01/31/24' title='Coming soon! Nintendo Switch games arriving in February 2024' link='Read more' />

          <LittleNews imagenlurl='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/articles/2024/try-out-the-free-mario-vs-donkey-kong-demo-and-save-the-mini-marios/NcomDemo_MDK_EN' date='01/31/24' title='Try out the free Mario vs. Donkey Kong demo and save the Mini-Marios!' link='Read more' />
        </section>
      </section>

      <button className='news-art'>See all news articles</button>
    </>
  )
}
