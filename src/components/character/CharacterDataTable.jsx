import React from 'react'
import { useGetCharacters, useGetFiveCharacters } from '../../api/Api'

const CharacterDataTable = () => {

  const {characters,isLoading:charactersLoading}=useGetCharacters(2);

  console.log(characters?.results)

  const {fiveCharacter,isLoading}=useGetFiveCharacters(1);

  return (
    <div>
      <div>
        
      </div>
      {!charactersLoading ?(
        <div>
          <p>data loaded</p>
        </div>
      ):(
        <div>
          <p>loading...</p>
        </div>
      )}
      
    </div>
  )
}

export default CharacterDataTable
