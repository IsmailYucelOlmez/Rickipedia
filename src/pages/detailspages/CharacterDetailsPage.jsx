import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetCharacterById } from '../../api/CharacterApi';
import Image from '../../components/Image';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import Loading from '../../components/Loading';
import { useGetMultipleEpisodes } from '../../api/EpisodeApi';
import EpisodeTableRow from '../../components/episode/EpisodeTableRow';
import NotFoundComponent from '../../components/NotFoundComponent'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AdbIcon from '@mui/icons-material/Adb';
import TransgenderIcon from '@mui/icons-material/Transgender';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CharacterDetailsPage = () => {

  const {id}=useParams();

  const {character,isLoading,error}=useGetCharacterById(id);

  const locationIndex=character?.location?.url.split("/").at(-1) || 0
  const originIndex=character?.origin?.url.split("/").at(-1) || 0

  const episodeIndexes=character?.episode.map((e,i)=>e.split("/").at(-1)) || []

  const {episodes,isLoading:episodesLoading}=useGetMultipleEpisodes(episodeIndexes);
  let convertedEpisodes= !Array.isArray(episodes) ? [episodes]:episodes
  

  return (
    <div className='xs:w-9/10 lg:w-3/4 mx-auto py-12 flex flex-col items-center xs:gap-8 md:gap-10'>

      {isLoading ? (

        <Loading/>
      ):(
      <>
        <div className='flex justify-center xs:gap-2 md:gap-10'>
          <Image src={character?.image} className={"rounded-xl xs:h-36 md:h-72"}/>

          <div className='flex flex-col xs:gap-1 md:gap-8'>
            <h5 className='xs:text-base md:text-xl font-semibold'>{character?.name}</h5>

            <div className='flex flex-col xs:gap-1 md:gap-4'>
              <div className='flex items-center xs:gap-1 md:gap-2'>
                <MonitorHeartIcon sx={{ fontSize:{ xs:15, sm:20, md:20} }}/>
                <p className='xs:text-sm md:text-base'>{character?.status}</p>
              </div>
              <div className='flex items-center gap-2'>
                <AdbIcon sx={{ fontSize:{ xs:15, sm:20, md:20} }}/>
                <p className='xs:text-sm md:text-base'>{character?.species}</p>
              </div>
              <div className='flex items-center gap-2'>          
                <TransgenderIcon sx={{ fontSize:{ xs:15, sm:20, md:20} }}/>              
                <p className='xs:text-sm md:text-base'>{character?.gender}</p>
              </div>     
            </div>

            <div className='flex flex-col xs:gap-1 md:gap-4'>
              <Link to={originIndex!=0 ? `/location/${originIndex}` : ''}  className="xs:text-sm md:text-base flex items-center xs:gap-1 md:gap-2 md:px-1" >    
                <PublicIcon sx={{ fontSize:{ xs:15, sm:20, md:20} }}/>   
                Origin: '
                {character?.origin?.name}'
                {character?.origin?.url && (
                  <OpenInNewOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                )}
              </Link>      
              <Link to={locationIndex!=0 ? `/location/${locationIndex}` : ''} className="xs:text-sm md:text-base flex items-center xs:gap-1 md:gap-2 md:px-1" >       
                <LocationOnIcon sx={{ fontSize:{ xs:15, sm:20, md:20} }}/>      
                Location: ' 
                { character?.location?.name}'
                {character?.location?.url && (
                <OpenInNewOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                )}                   
              </Link>
            </div>
  
          </div>
        </div>

        <div className='flex flex-col items-center xs:gap-1 md:gap-8 w-full'>
          <div className='flex items-center justify-center gap-2'>
            <h5 className='xs:text-base md:text-xl font-semibold'>Episodes</h5>
            <p className='text-right'>({character?.episode?.length})</p>
          </div>
          

          <div className='flex flex-col w-full'>
          {episodesLoading ? (
           
            <Loading/>
          ):(
            
            convertedEpisodes?.map((e)=>(                        
           
              <EpisodeTableRow key={e.id} episode={e}/>           
            ))
          )}
          
          </div>
        </div>
      </>
      )}

      { error && (

        <NotFoundComponent/>
      )} 
      
    </div>
  )
}

export default CharacterDetailsPage
