import { useQuery } from "react-query"

const baseUrl="https://rickandmortyapi.com/api"

export const useGetEpisodes=(page)=>{

    const getEpisodesRequest=async()=>{

        const response = await fetch(`${baseUrl}/episode/?page=${page}`, { method:"GET" });

        if(!response.ok){
            throw new Error("failed to get characters")
        }

        return response.json();
    
    }

    const {data:episodes,isLoading,isError}=useQuery(["data",page],getEpisodesRequest,);

    return{episodes,isLoading,isError}
}