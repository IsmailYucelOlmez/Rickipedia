import React, { useState } from 'react'
import { useGetCharacters } from '../../api/CharacterApi'
import Pagination from '../Pagination';
import SearchandFilterBar from '../SearchandFilterBar';
import CharacterTableRow from './CharacterTableRow';
import Loading from '../Loading'
import CharacterTableHead from './CharacterTableHead';

const CharacterDataTable = () => {

  const filterTemplate=
  {
      page:1,
      status:[],
      species:[],
      gender:[],
      name:'',
      pageSize:20,
      sort:{attribute:'',type:'default'}
  };

  const [filters,setFilters]=useState(filterTemplate)

  const {characters,isLoading:charactersLoading}=useGetCharacters(filters);
  

  return (
      
        <div className='flex flex-col'>

          <SearchandFilterBar placeholder={"Search by Name..."} setFilters={setFilters}/>

          <CharacterTableHead filters={filters} setFilters={setFilters} />

          {!charactersLoading ?(
          <>
            <div className='flex flex-col gap-4'>

            {characters?.results.map((character,i)=>(

              <CharacterTableRow key={character.id} character={character}/>
            ))}
            </div>

            <Pagination dataLength={characters?.info.count} currentPage={filters.page} pageSize={filters.pageSize} setFilters={setFilters} /> 

          </>

          ):(
            <Loading/>
          )}

          

        </div>
        
      
      
  )
}

export default CharacterDataTable
