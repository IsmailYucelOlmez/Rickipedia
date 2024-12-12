import { useQuery } from "react-query"

const baseUrl="https://rickandmortyapi.com/api"

export const useGetEpisodes=(page)=>{

    const getEpisodesRequest=async()=>{

        const response = await fetch(`${baseUrl}/episode/?page=${page}`, { method:"GET" });

        if(!response.ok){
            throw new Error("failed to get episodes")
        }

        return response.json();
    
    }

    const {data:episodes,isLoading,isError}=useQuery(["data",page],getEpisodesRequest,);

    return{episodes,isLoading,isError}
}

export const useGetEpisodeById=(id)=>{

    const getEpisodeRequest=async()=>{

        const response = await fetch(`${baseUrl}/episode/${id}`, { method:"GET" });

        if(!response.ok){
            throw new Error("failed to get episodes")
        }

        return response.json();
    
    }

    const {data:episode,isLoading,isError}=useQuery(["episode",id],getEpisodeRequest,);

    return{episode,isLoading,isError}
}


export const useGetMultipleEpisodes=(episodeIndexes)=>{

    const getMultipleEpisodesRequest=async()=>{

        const response = await fetch(`${baseUrl}/episode/${[episodeIndexes]}`, { method:"GET" });

        if(!response.ok){
            throw new Error("failed to get episodes")
        }

        return response.json();
    
    }

    const {data:episodes,isLoading,isError}=useQuery(["episodes",episodeIndexes],getMultipleEpisodesRequest,);

    return{episodes,isLoading,isError}
}