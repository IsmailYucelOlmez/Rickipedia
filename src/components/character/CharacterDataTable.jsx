import React, { useState } from 'react'
import { useGetCharacters, useGetFiveCharacters } from '../../api/CharacterApi'
import Pagination from '../Pagination';
import SearchandFilterBar from '../SearchandFilterBar';
import CharacterTableRow from './CharacterTableRow';

const CharacterDataTable = () => {

  const [currentPage,setCurrentPage]=useState(1);

  const {characters,isLoading:charactersLoading}=useGetCharacters(currentPage);
 
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

            <CharacterTableRow key={character.id} character={character}/>
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
