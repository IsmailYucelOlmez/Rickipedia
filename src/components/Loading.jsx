import React from 'react'
import Image from './Image'
import LoadingImage from '../assets/RickipediaLoadingComponent.svg'

const Loading = () => {
  return (
    <div className='flex justify-center items-center my-6'>
      <Image src={LoadingImage} className={"w-1/2 "}/>
    </div>
  )
}

export default Loading
