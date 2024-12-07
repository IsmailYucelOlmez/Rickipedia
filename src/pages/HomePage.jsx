import React from 'react'
import HeroBanner from '../assets/RMHeroBanner.svg'
import Image from '../components/Image'

const HomePage = () => {
  return (
    <div className='w-3/4 mx-auto flex justify-between items-center gap-6 my-12'>
      <div className='flex flex-col gap-4 '>
        <h3 className='text-2xl font-semibold font-sourGummy'>Rickipedia</h3>
        <p className='text-lg font-semibold'>Your Ultimate Guide to the Multiverse!</p>
        <p className='text-justify'>Explore every dimension, uncover character secrets, and relive iconic adventures. Dive into the chaos of Rick and Morty's universe, all in one place!</p>
      </div>

      <Image src={HeroBanner} className={"w-6/10"} />
    </div>
  )
}

export default HomePage
