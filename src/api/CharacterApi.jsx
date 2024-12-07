import { useQuery } from "react-query"

const baseUrl="https://rickandmortyapi.com/api"

export const useGetCharacters=(page)=>{

    const getCharactersRequest=async()=>{

        const response = await fetch(`${baseUrl}/character/?page=${page}`, { method:"GET" });

        if(!response.ok){
            throw new Error("failed to get characters")
        }

        return response.json();
    
    }

    const {data:characters,isLoading,isError}=useQuery(["data",page],getCharactersRequest,);

    return{characters,isLoading,isError}
}

export const useGetFiveCharacters=(firstId)=>{

    const getFiveCharacterRequest=async()=>{

        const response=await fetch(`${baseUrl}/character/[${firstId},${firstId+1},${firstId+2},${firstId+3},${firstId+4}]`)

        if(!response.ok){
            throw new Error("failed to get characters")
        }

        return response.json()
    }

    const {data:fiveCharacter,isLoading}=useQuery("fetchFiveCharacters",getFiveCharacterRequest);

    return {fiveCharacter,isLoading}
}