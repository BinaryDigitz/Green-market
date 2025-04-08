import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt=" hero" className='w-full hidden md:block'/>
      <img src={assets.main_banner_bg_sm} alt=" hero" className='w-full md:hidden '/>
      <div className='absolute insert-0 flex  flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
        <h1 className=' text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:w-80 lg:max-w-105 leading-tight lg:leading-14'>Freshness You Can Trust, Savings You Will Love</h1>
      </div>
      <div className='flex items-center mt-5 font-medium'>
        <Link to='/products' className='group flex items-center gap-2 px-7 md:px-3 bg-primary hover:opacity-80 transistion rounded text-white cursor-pointer'>
        Shop now
        <img src={ assets.arrow_right_icon_colored} alt="arrow" className='md:hidden transition group-focus:translate-x-1' />
        </Link>
        <Link to='/products' className='group hidden md:flex items-center gap-2 px-7 md:px-3  hover:opacity-80 transistion rounded text-white cursor-pointer'>
        Explore deals
        <img src={ assets.arrow_icon} alt="arrow" className='md:hidden transition group-focus:translate-x-1' />
        </Link>
      </div>
    </div>
  )
}

export default Hero
