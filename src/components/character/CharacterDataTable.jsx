import React, { useEffect, useState } from 'react'
import { useGetCharacters, useGetFiveCharacters } from '../../api/CharacterApi'
import Image from '../Image'
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import SearchandFilterBar from '../SearchandFilterBar';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import TripOriginOutlinedIcon from '@mui/icons-material/TripOriginOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const CharacterDataTable = () => {

  const [currentPage,setCurrentPage]=useState(1);

  const {characters,isLoading:charactersLoading,refetch}=useGetCharacters(currentPage);
 
  //const {fiveCharacter,isLoading}=useGetFiveCharacters(1);

  return (
        
      !charactersLoading ?(

        <div className='flex flex-col'>

          <SearchandFilterBar placeholder={"Search by Name..."}/>

          <div className='flex justify-between items-center px-2 border-b border-black pb-1 mb-2'>
            <div className='w-28'>
              <p></p>
            </div>
            <div className='grid grid-cols-4  gap-2 w-full text-center'>
              
              <p>Name</p>
              <p>Statu</p>
              <p>Species</p>
              <p>Gender</p>
              
            </div>
            
          </div>

          <div className='flex flex-col gap-4'>

          {characters?.results.map((character,i)=>(

            <div key={character.id} className='flex justify-between items-center my-2'>
              <Image src={character.image} className={"w-28 h-28 rounded-xl"} />
              <div className='flex flex-col justify-between gap-4 flex-1 h-24'>
                <div className='grid grid-cols-4 gap-2 w-full text-center'>
                  <p>{character.name}</p>
                  <p>{character.status}</p>
                  <p>{character.species}</p>
                  <p>{character.gender}</p>
                </div>
                <div className='flex justify-around items-center w-full'>
                  <Link to={character.origin.url}  className="flex justify-center items-center gap-1" >
                    <TripOriginOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                    {character.origin.name}
                    {character.origin.url && (
                      <OpenInNewOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                    )}
                  </Link>
                  <Link to={character.location.url} className="flex justify-center items-center gap-1" >
                    <PlaceOutlinedIcon sx={{ fontSize:{ xs:15, sm:20, md:20} }}/>
                    {character.location.name}
                    {character.location.url && (
                      <OpenInNewOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                    )}
                    
                  </Link>
                </div>
              </div>
            </div>
          ))}
          </div>

          <Pagination dataLength={characters?.info.count} currentPage={currentPage} setCurrentPage={setCurrentPage} />

        </div>
        
      ):(
        <div>
          <p>loading...</p>
        </div>
      )
      
  )
}

export default CharacterDataTable
