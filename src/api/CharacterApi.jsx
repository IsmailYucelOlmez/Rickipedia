import { useQuery } from "react-query"

const baseUrl="https://rickandmortyapi.com/api"

export const useGetCharacters=(filters)=>{
   
    let actualPage;

    if(filters.pageSize==10){
        if(filters.page%2==1){

            actualPage=(filters.page+1)/2;      
        }else{
            actualPage=filters.page/2;
        }
    } 

    const params = new URLSearchParams();
      params.set("page", filters.pageSize==10 ? actualPage:filters.page);
      params.set("name", filters.name);
      params.set("status", filters.status.join(",") );
      params.set("species", filters.species.join(","));
      params.set("gender", filters.gender.join(","));
    
   
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

        return data;
    
    }

    const {data:characters,isLoading,isError}=useQuery(["data",filters],getCharactersRequest,);
    

    return{characters,isLoading,isError}
}
