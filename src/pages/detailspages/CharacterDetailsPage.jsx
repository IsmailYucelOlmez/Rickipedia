import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetCharacterById } from '../../api/CharacterApi';
import Image from '../../components/Image';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import Loading from '../../components/Loading';
import { useGetEpisodeById, useGetMultipleEpisodes } from '../../api/EpisodeApi';
import EpisodeTableRow from '../../components/episode/EpisodeTableRow';

const CharacterDetailsPage = () => {

  const {id}=useParams();

  const {character,isLoading}=useGetCharacterById(id);

  const episodeIndexes=character?.episode.map((e,i)=>e.split("/").at(-1))

  const {episodes,isLoading:episodesLoading}=useGetMultipleEpisodes(episodeIndexes);

  return (
    <div className='w-3/4 mx-auto my-12 flex flex-col items-center gap-10'>

      {isLoading ? (

        <Loading/>
      ):(
      <>
        <div className='flex justify-center gap-10'>
          <Image src={character?.image} className={"rounded-xl h-72"}/>

          <div className='flex flex-col gap-8'>
            <h5 className='text-xl font-semibold'>{character?.name}</h5>

            <div className='flex flex-col gap-2'>
              <p>{character?.status}</p>
              <p>{character?.species}</p>
              <p>{character?.gender}</p>
            </div>

            <div className='flex flex-col gap-3'>
              <Link to={character?.origin?.url || ''}  className="flex items-center gap-1 px-1" >            
                Origin: '
                {character?.origin?.name}'
                {character?.origin?.url && (
                  <OpenInNewOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                )}
              </Link>      
              <Link to={character?.location?.url || ''} className=" flex items-center gap-1 px-1" >           
                Location: ' 
                { character?.location?.name}'
                {character?.location?.url && (
                <OpenInNewOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                )}                   
              </Link>
            </div>
  
          </div>
        </div>

        <div className='flex flex-col items-center gap-8 w-full'>
          <h5 className='text-xl font-semibold'>Episodes</h5>

          <div className='flex flex-col  w-full'>
          {episodes?.map((e)=>(                        
           
            <EpisodeTableRow key={e.id} episode={e}/>           
          ))}
          </div>
        </div>
      </>
      )}
      
    </div>
  )
}

export default CharacterDetailsPage
