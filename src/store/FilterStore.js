import { create } from "zustand";

const filterStore=(set,get)=>({
    filters:{
        page:1,
        status:[],
        species:[],
        gender:[],
        name:'',
        pageSize:20,
        sort:{attribute:'',type:'default'}
    },
    updateFilters: (updatedFields) => {
        set((state) => ({
            filters: {
                ...state.filters,  // Mevcut filtreleri koru
                ...updatedFields, // Sadece güncellenmesi gereken alanları değiştir
            },
        }));
    },
    setSort:(attribute)=>{

        const filters=get().filters

        if(filters.sort.attribute==attribute){

            if(filters.sort.type=="default") set((state)=>({filters:{...state.filters,sort:{attribute:attribute,type:"asc"}} }))
            else if(filters.sort.type=="asc") set((state)=>({filters:{...state.filters,sort:{attribute:attribute,type:"desc"}} }))
            else if(filters.sort.type=="desc") set((state)=>({filters:{...state.filters,sort:{attribute:"",type:"default"}} }))
    
        }else{
            set((state)=>({filters:{...state.filters,sort:{attribute:attribute,type:"asc"}} } ))         
        }
    },
    resetFilters:()=>{

        set((state)=>({filters:{
            page:1,
            status:[],
            species:[],
            gender:[],
            name:'',
            pageSize:20,
            sort:{attribute:'',type:'default'}
        },}))
    },
    

})

const useFilterStore=create(filterStore);

export default useFilterStore