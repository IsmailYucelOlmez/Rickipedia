import React, { useEffect } from 'react'
import CharacterDataTable from '../components/character/CharacterDataTable'
import useFilterStore from '../store/FilterStore'

const CharactersPage = () => {

  const {resetFilters}=useFilterStore();

  useEffect(()=>{

    //resetFilters();
  },[])

  return (
    <div className='xs:w-9/10 lg:w-3/4 mx-auto py-12'>
      <CharacterDataTable/>
    </div>
  )
}

export default CharactersPage
