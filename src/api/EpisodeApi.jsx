import { useQuery } from "react-query"
import { toast } from "react-toastify";

const baseUrl="https://rickandmortyapi.com/api"

const setParams=(filters,params)=>{

    let actualPage;

    if(filters.pageSize==10){
        if(filters.page%2==1){
            actualPage=(filters.page+1)/2;      
        }else{
            actualPage=filters.page/2;
        }
    } 

    params.set("page", filters.pageSize==10 ? actualPage:filters.page);
    params.set("name", filters.name);
}


export const useGetEpisodes=(filters)=>{
   
    const params = new URLSearchParams();
      
    setParams(filters,params)
    
   
    const getEpisodesRequest=async()=>{

        const response = await fetch(`${baseUrl}/episode/?${params.toString()}`, { method:"GET" });

        if(!response.ok){
            if(response.status==404) throw new Error("not found error");
            else throw new Error("failed to get episodes")
        }

        const data = await response.json();

        // Dinamik olarak slice işlemi uygula
        if (filters.pageSize === 10) {
            const startIndex = (filters.page % 2 === 1) ? 0 : 10;
            const endIndex = startIndex + 10;
            data.results = data.results.slice(startIndex, endIndex);
        }

        if(filters.sort.attribute && filters.sort.type!="default"){
            data.results.sort((a, b) => {
                const valueA = a[filters.sort.attribute].toUpperCase(); // Dinamik olarak attribute'e erişim
                const valueB = b[filters.sort.attribute].toUpperCase(); // Dinamik olarak attribute'e erişim
        
                if (filters.sort.type === 'asc') {
                    return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
                } else if (filters.sort.type === 'desc') {
                    return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
                }
            });
        }

        return data;
    
    }

    const {data:episodes,isLoading,error}=useQuery(["data",filters],getEpisodesRequest,);

    if(error && error?.message!="not found error") toast.error("Failed to Get Episodes. Please Retry")
    

    return{episodes,isLoading,error}
}

export const useGetEpisodeById=(id)=>{

    const getEpisodeRequest=async()=>{

        const response = await fetch(`${baseUrl}/episode/${id}`, { method:"GET" });

        if(!response.ok){
            throw new Error("failed to get episodes")
        }

        return response.json();
    
    }

    const {data:episode,isLoading,error}=useQuery(["episode",id],getEpisodeRequest,);

    if(error) toast.error("Failed to Get Episode. Please Retry")

    return{episode,isLoading,error}
}


export const useGetMultipleEpisodes=(episodeIndexes)=>{

    const getMultipleEpisodesRequest=async()=>{

        const response = await fetch(`${baseUrl}/episode/${[episodeIndexes]}`, { method:"GET" });

        if(!response.ok){
            throw new Error("failed to get episodes")
        }

        return response.json();
    
    }

    const {data:episodes,isLoading,error}=useQuery(["episodes",episodeIndexes],getMultipleEpisodesRequest,);

    if(error) toast.error("Failed to Get Episodes. Please Retry")

    return{episodes,isLoading,error}
}