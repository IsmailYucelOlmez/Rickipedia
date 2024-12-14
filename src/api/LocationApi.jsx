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


export const useGetLocations=(filters)=>{
   
    const params = new URLSearchParams();
      
    setParams(filters,params)
    
   
    const getLocationsRequest=async()=>{

        const response = await fetch(`${baseUrl}/location/?${params.toString()}`, { method:"GET" });

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

    const {data:locations,isLoading,error}=useQuery(["data",filters],getLocationsRequest,);

    if(error && error?.message!="not found error") toast.error("Failed to Get Locations. Please Retry")
    

    return{locations,isLoading,error}
}

export const useGetLocationById=(id)=>{

    const getLocationByIdRequest=async()=>{

        const response =await fetch(`${baseUrl}/location/${id}`,{method:'GET'})

        if(!response.ok){

            throw new Error("Failed to get location")
        }

        return response.json();
    }

    const {data:location,isLoading,error}=useQuery("getlocation",getLocationByIdRequest);

    if(error) toast.error("Failed to Get Locations. Please Retry")

    return {location,isLoading,error}
}


