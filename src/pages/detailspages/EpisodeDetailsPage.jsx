import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetEpisodeById } from '../../api/EpisodeApi';
import Loading from '../../components/Loading';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useGetMultipleCharacters } from '../../api/CharacterApi';
import CharacterTableRow from '../../components/character/CharacterTableRow';


const EpisodeDetailsPage = () => {

  const {id}=useParams();

  const {episode,isLoading}=useGetEpisodeById(id);

  const characterIndexes=episode?.characters.map((e,i)=>e.split("/").at(-1)) || []
  
  const {characters,isLoading:charactersLoading}=useGetMultipleCharacters(characterIndexes);
  let convertedCharacters= !Array.isArray(characters) ? [characters]:characters

  console.log(convertedCharacters)

  return (
    <div className='w-3/4 mx-auto py-12'>
      {!isLoading ? (
        <div className='flex flex-col gap-10'>

          <div className='flex flex-col items-center gap-4'>
            <h5 className='text-2xl font-semibold'>{episode?.name}</h5>  

            <div className='flex justify-center items-center gap-8'>
              <div className='flex items-center gap-1'>
                <BookmarkBorderOutlinedIcon sx={{ fontSize:{ xs:15, sm:20, md:20} }}/>
                <p>{episode?.episode}</p>
              </div>     
              <div className='flex items-center gap-1'>
                <CalendarTodayIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                <p>{episode?.air_date}</p>
              </div> 
            </div>  
                                   
          </div>

          <div className='flex flex-col items-center gap-6'>
            <div className='flex items-center gap-2'>
              <h5 className='text-xl font-semibold'>Characters</h5>
              <p>({characterIndexes.length})</p>
            </div>

            <div className='flex flex-col w-full gap-4'>
            {charactersLoading ? (
           
              <Loading/>
            ):(              
              convertedCharacters?.map((e)=>(                        
           
                <CharacterTableRow key={e.id} character={e}/>           
              ))
            )}
          
          </div>
            
          </div>

        </div>
      ):(
        <Loading/>
      )}
    </div>
  )
}

export default EpisodeDetailsPage
