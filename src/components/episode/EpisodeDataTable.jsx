import React, { useState } from 'react'
import { useGetEpisodes } from '../../api/EpisodeApi';
import Pagination from '../Pagination';
import SearchandFilterBar from '../SearchandFilterBar';
import EpisodeTableRow from './EpisodeTableRow';


const EpisodeDataTable = () => {

  const [currentPage,setCurrentPage]=useState(1);

  const {episodes,isLoading:episodesLoading}=useGetEpisodes(currentPage);
 

  return (
        
      !episodesLoading ?(

        <div className='flex flex-col'>

          <SearchandFilterBar placeholder={"Search by Name..."}/>

          <div className='flex justify-between items-center px-2 border-b border-black pb-1 mb-2'>
            
            <div className='grid grid-cols-3  gap-2 w-full text-center'>
              
              <p>Name</p>
              <p>Air Date</p>
              <p>Episode Code</p>            
              
            </div>
            
          </div>

          <div className='flex flex-col gap-4'>

          {episodes?.results.map((episode,i)=>(

            <EpisodeTableRow key={episode.id} episode={episode}/>
          ))}
          </div>

          <Pagination dataLength={episodes?.info.count} currentPage={currentPage} setCurrentPage={setCurrentPage} />

        </div>
        
      ):(
        <div>
          <p>loading...</p>
        </div>
      )
      
  )
}

export default EpisodeDataTable
