import React, { useState } from 'react'
import { useGetEpisodes } from '../../api/EpisodeApi';
import Pagination from '../Pagination';
import SearchandFilterBar from '../SearchandFilterBar';
import EpisodeTableRow from './EpisodeTableRow';
import EpisodeTableHead from './EpisodeTableHead';
import useFilterStore from '../../store/FilterStore';
import Loading from '../Loading';


const EpisodeDataTable = () => {

  const filters=useFilterStore((state)=>state.filters)

  const {episodes,isLoading:episodesLoading}=useGetEpisodes(filters);
 

  return (
        
        <div className='flex flex-col'>

          <SearchandFilterBar placeholder={"Search by Name..."}/>

          <EpisodeTableHead />

        { !episodesLoading ?(  

          <>  
            <div className='flex flex-col gap-4'>

            {episodes?.results.map((episode,i)=>(

              <EpisodeTableRow key={episode.id} episode={episode}/>
            ))}
            </div>

            <Pagination dataLength={episodes?.info.count}  />

          </>  

        ):(
          <Loading/>
        )}  

        </div>
        
     
      
  )
}

export default EpisodeDataTable
