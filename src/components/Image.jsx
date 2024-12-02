import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Image = ({src,className}) => {
  return (
    
    <LazyLoadImage src={src} className={className || ""} />
    
  )
}

export default Image