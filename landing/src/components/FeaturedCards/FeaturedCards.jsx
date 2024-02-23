import './FeaturedCards.css'
import { FCards } from './FCards/FCards'

export function FeaturedCards () {
  return (
    <>
      <h1 className='featured'>Featured</h1>
      <section className='allcards'>
        <FCards imageUrl='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/en_US/merchandising/feature-banner/Current%20Events/Nintendo%20Direct/2023/03.09.2023/MD_red_promoAsset_v2356x200_Ncom_featureBanner_v2' title='Check out the presentation!' text='' />

        <FCards imageUrl='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/en_US/merchandising/feature-banner/Current%20Events/Hardware/MAR10%20Day/1920x1080_Mario-HW-bundle_FB-v2' title='Nintendo Switch Mario Choose One Bundle' text='Nintendo Switch' />

        <FCards imageUrl='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/My%20Nintendo%20Store/EN-US/MNS%20HOME/Characters/NINMERCH-1468-1920x1080-GridPromos-MarioFriends_v01' title='Check out games featuring Mario and friends!' text='Nintendo Switch' />

        <FCards imageUrl='https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/en_US/articles/2023/wave-4-is-out-now-for-the-mario-kart-8-deluxe-booster-course-pass-dlc/2250x1266_Switch_News_MK8W4_EN' title='Mario Kart 8 Deluxe DLC Wave 4—Available now' text='Nintendo Switch' />

      </section>
    </>
  )
}
