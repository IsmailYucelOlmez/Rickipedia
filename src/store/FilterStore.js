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
    resetPageValue:()=>{
        set((state) => ({
            filters: { ...state.filters, page: 1 }
        }));
    },
    changeName:(name)=>{
        set((state)=>({
            filters:{...state.filters,name:name}
        }))
    },
    setPageSize:(pageSize)=>{
        set((state)=>({
            filters:{...state.filters,pageSize:pageSize}
        }))
    },
    updateStatus:(status)=>{
        set((state)=>({
            filters:{...state.filters,status:[status]}
        }))
    },
    updateSpecies:(species)=>{
        set((state)=>({
            filters:{...state.filters,species:[species]}
        }))
    },
    updateGender:(gender)=>{
        set((state)=>({
            filters:{...state.filters,gender:[gender]}
        }))
    },
    updatePage:(page)=>{
        set((state)=>({
            filters:{...state.filters,page:page}
        }))
    }

})

const useFilterStore=create(filterStore);

export default useFilterStore