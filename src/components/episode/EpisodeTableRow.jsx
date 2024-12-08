import React from 'react'
import { Link } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const EpisodeTableRow = ({episode}) => {
  return (
    <div className='flex justify-between items-center my-2'>

      <div className='flex flex-col justify-between gap-4 flex-1 '>
        <div className='grid grid-cols-3 gap-2 w-full text-center h-24'>
          <p>{episode?.name}</p>
          <p>{episode?.air_date}</p>
          <p>{episode?.episode}</p>
                              
        </div>
      </div>
      <Link to={`/episode/${episode?.id}`} className='flex justify-center items-center'>
        <ArrowForwardIosRoundedIcon sx={{ fontSize:{ xs:15, sm:20, md:25} }}/>
      </Link>
    </div>
  )
}

export default EpisodeTableRow
