import { useQuery } from "react-query"

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
    params.set("status", filters.status.join(",") );
    params.set("species", filters.species.join(","));
    params.set("gender", filters.gender.join(","));
}


export const useGetCharacters=(filters)=>{
   
    const params = new URLSearchParams();
      
    setParams(filters,params)
    
   
    const getCharactersRequest=async()=>{

        const response = await fetch(`${baseUrl}/character/?${params.toString()}`, { method:"GET" });

        if(!response.ok){
            throw new Error("failed to get characters")
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

    const {data:characters,isLoading,isError}=useQuery(["data",filters],getCharactersRequest,);
    

    return{characters,isLoading,isError}
}

export const useGetCharacterById=(id)=>{

    const getCharacterByIdRequest=async()=>{

        const response =await fetch(`${baseUrl}/character/${id}`,{method:'GET'})

        if(!response.ok){

            throw new Error("Failed to get character")
        }

        return response.json();
    }

    const {data:character,isLoading,isError}=useQuery("getCharacter",getCharacterByIdRequest);

    return {character,isLoading,isError}
}
