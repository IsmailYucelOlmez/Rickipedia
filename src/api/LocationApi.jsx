import { useQuery } from "react-query"

const baseUrl="https://rickandmortyapi.com/api"

export const useGetLocations=(page)=>{

    const getLocationsRequest=async()=>{

        const response = await fetch(`${baseUrl}/location/?page=${page}`, { method:"GET" });

        if(!response.ok){
            throw new Error("failed to get characters")
        }

        return response.json();
    
    }

    const {data:locations,isLoading,isError}=useQuery(["data",page],getLocationsRequest,);

    return{locations,isLoading,isError}
}