import React from 'react'
import Image from './Image'
import NotFound from '../assets/notFound.svg'

const NotFoundComponent = () => {
  return (
    <div className='flex justify-center items-center my-3'>
      <Image src={NotFound} className={"w-3/4 rounded-xl"}/>
    </div>
  )
}

export default NotFoundComponent
