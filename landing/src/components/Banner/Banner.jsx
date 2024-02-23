import './Banner.css'

export function Banner () {
  return (
    <>
      <img src='https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1500/ncom/en_US/merchandising/center-stage-stories/2024/01-January/Jump-Start-January-Sale/3600x1300___Mario_Vs_Donkey_Kong_Blue_Centerstage_Desktop' className='big-img' />
      <img src='https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_800/ncom/en_US/merchandising/center-stage-stories/2024/02-February/Mario-vs-Donkey-Kong/2200x2000___Mario_vs_Donkey_Kong_KeyArt_Centerstage_Mobile' className='big-img-cell' />
      <section className='main1'>
        <h1>Run, jump and backflip your way through the free demo today!</h1>
        <button>Available now</button>
      </section>
      <section className='main2'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/ESRB_2013_Teen.svg/800px-ESRB_2013_Teen.svg.png' className='pg' />
        <p>Mild Fantasy Violence</p>
      </section>
    </>
  )
}
