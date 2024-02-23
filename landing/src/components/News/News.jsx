import './News.css'
import { BigNews } from './BigNews/BigNews'

export function News () {
  return (
    <>
      <h1 className='title'>News</h1>

      <section className='news-cards'>
        <BigNews imagenurl='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/articles/2024/dig-into-a-marmot-ain-of-games-with-underground-areas/2250x1266_Ncom_depth_EN' date='02/02/24' title='Dig into a marmot-ain of games with underground areas!' text='Ahh… the majestic groundhog. These adorable critters have been known to take...' link='Read more' />

        <BigNews imagenurl='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_800/ncom/en_US/articles/2024/mobilenews-get-in-the-festive-mood-with-lunar-new-year-ornament-gold-and-red-decor-pikmin/Feb24_PikminBloom_LunarNewYear' date='02/02/24' title='Get in the festive mood with Lunar New Year Ornament: Gold and Red Decor Pikmin' text='Lunar New Year festivities, which are usually celebrated around February in several regions throughout Asia, are just around the corner! This year,...' link='Read more' />
      </section>
    </>
  )
}
