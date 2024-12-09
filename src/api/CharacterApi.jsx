import { useQuery } from "react-query"

const baseUrl="https://rickandmortyapi.com/api"

export const useGetCharacters=(filters)=>{
   
    const params = new URLSearchParams();
      params.set("page", filters.page);
      params.set("status", filters.status.join(",") );
      params.set("species", filters.species.join(","));
      params.set("gender", filters.gender.join(","));
   
    const getCharactersRequest=async()=>{

        const response = await fetch(`${baseUrl}/character/?${params.toString()}`, { method:"GET" });

        if(!response.ok){
            throw new Error("failed to get characters")
        }

        return response.json();
    
    }

    const {data:characters,isLoading,isError}=useQuery(["data",filters],getCharactersRequest,);

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