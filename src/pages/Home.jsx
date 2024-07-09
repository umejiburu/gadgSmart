import { useState } from 'react'
import { Banner, FashSale, Hero, RecentSale } from '../components'

function Home() {
  return (
    <div className='container'>
      <Banner/>
      <FashSale/>
      <RecentSale/>
      <Hero/>
    </div>
  )
}

export default Home