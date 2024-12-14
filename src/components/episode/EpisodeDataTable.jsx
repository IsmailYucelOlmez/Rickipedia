import React, { useState } from 'react'
import { useGetEpisodes } from '../../api/EpisodeApi';
import Pagination from '../Pagination';
import SearchandFilterBar from '../SearchandFilterBar';
import EpisodeTableRow from './EpisodeTableRow';
import EpisodeTableHead from './EpisodeTableHead';
import useFilterStore from '../../store/FilterStore';
import Loading from '../Loading';
import NotFoundComponent from '../NotFoundComponent';


const EpisodeDataTable = () => {

  const filters=useFilterStore((state)=>state.filters)

  const {episodes,isLoading:episodesLoading,error}=useGetEpisodes(filters);
 

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

        { (error && error?.message=="not found error") && (

          <NotFoundComponent/>
        )} 

        </div>
        
     
      
  )
}

export default EpisodeDataTable
