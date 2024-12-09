import React, { useState } from 'react'
import { useGetCharacters } from '../../api/CharacterApi'
import Pagination from '../Pagination';
import SearchandFilterBar from '../SearchandFilterBar';
import CharacterTableRow from './CharacterTableRow';

const CharacterDataTable = () => {

  const filterTemplate=
  {
      page:'1',
      status:[],
      species:[],
      gender:[],
      name:''
  };

  const [filters,setFilters]=useState(filterTemplate)

  const {characters,isLoading:charactersLoading}=useGetCharacters(filters);

  return (
      
        <div className='flex flex-col'>

          <SearchandFilterBar placeholder={"Search by Name..."} setFilters={setFilters}/>

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

          {!charactersLoading ?(
          <>
            <div className='flex flex-col gap-4'>

            {characters?.results.map((character,i)=>(

              <CharacterTableRow key={character.id} character={character}/>
            ))}
            </div>

            <Pagination dataLength={characters?.info.count} currentPage={filters.page} setFilters={setFilters} /> 

          </>

          ):(
            <div>
              <p>loading...</p>
            </div>
          )}

          

        </div>
        
      
      
  )
}

export default CharacterDataTable
