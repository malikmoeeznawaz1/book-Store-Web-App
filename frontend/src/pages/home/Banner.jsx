import React from 'react'
import bannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row py-2 justify-between items-center gap-10'>
      <div className='md:w-1/2 w-full '>
        <h1 className='md:text-3xl text-2xl font-medium mb-7'>New Releases This Week</h1>
        <p className='mb-10'>
        It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone
        </p>

        <button className='btn-primary'>Subscribe</button>
      </div>
      
      
      <div className='md:w-1/2 w-full'>
        <img src={bannerImg} alt="Banner"  />
      </div>
    </div>
  )
}

export default Banner