import React from 'react'
import hero from '../assets/Rectangle 4.png'

function Hero() {
  return (
    <div className="relative">
        <div className='py-10'>
            <img src={hero} alt="" className=' opacity-65' />
        </div>
        <h2 className='font-bold absolute left-96 top-44 text-3xl text-white'>&quot;Let&apos;s Shop Beyond Boundaries&quot;</h2>
    </div>
  )
}

export default Hero