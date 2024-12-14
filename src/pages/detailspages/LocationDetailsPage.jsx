import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetLocationById } from '../../api/LocationApi';
import Loading from '../../components/Loading';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LensBlurOutlinedIcon from '@mui/icons-material/LensBlurOutlined';
import { useGetMultipleCharacters } from '../../api/CharacterApi';
import CharacterTableRow from '../../components/character/CharacterTableRow';


const LocationDetailsPage = () => {

  const {id}=useParams();

  const {location,isLoading,error}=useGetLocationById(id);

  const characterIndexes=location?.residents.map((e,i)=>e.split("/").at(-1)) || []
  
  const {characters,isLoading:charactersLoading}=useGetMultipleCharacters(characterIndexes);
  let convertedCharacters= !Array.isArray(characters) ? [characters]:characters

  return (
    <div className='w-3/4 mx-auto py-12'>
      {!isLoading ? (
        <div className='flex flex-col gap-10'>

          <div className='flex flex-col items-center gap-4'>
            <h5 className='text-2xl font-semibold'>{location?.name}</h5>  

            <div className='flex justify-center items-center gap-8'>
              <div className='flex items-center gap-1'>
                <LocationOnOutlinedIcon sx={{ fontSize:{ xs:15, sm:20, md:20} }}/>
                <p>{location?.type}</p>
              </div>     
              <div className='flex items-center gap-1'>
                <LensBlurOutlinedIcon sx={{ fontSize:{ xs:15, sm:20, md:20} }}/>
                <p>{location?.dimension}</p>
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

      { error && (

        <NotFoundComponent/>
      )} 

    </div>
  )
}

export default LocationDetailsPage

