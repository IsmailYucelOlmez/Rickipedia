import React, { useState } from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';

const CharacterTableHead = ({filters,setFilters}) => {

  const changeSortSettings=(attribute)=>{

    if(filters.sort.attribute==attribute){

        if(filters.sort.type=="default") setFilters(prev=>({...prev,sort:{attribute:attribute,type:"asc"}}))
        else if(filters.sort.type=="asc") setFilters(prev=>({...prev,sort:{attribute:attribute,type:"desc"}}))
        else if(filters.sort.type=="desc") setFilters(prev=>({...prev,sort:{attribute:'',type:"default"}}))

    }else{
        setFilters(prev=>({...prev,sort:{attribute:attribute,type:"asc"}}))
    }
  
  }

  return (
    <div className='flex justify-between items-center px-2 border-b border-black pb-1 mb-2'>
            <div className='w-28'>
              <p></p>
            </div>
            <div className='grid grid-cols-4  gap-2 w-full text-center'>
              
              <button onClick={()=>changeSortSettings('name')} className='flex justify-center items-center gap-1'>
                {filters.sort.attribute!="name" && (
                    <CircleIcon sx={{ fontSize:{ xs:7, sm:7, md:7} }}/>
                )}
                {filters.sort.attribute=="name" && filters.sort.type=="asc" && (
                    <>
                        <SortByAlphaOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                        <SwapVertIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                    </>
                    
                )}
                {filters.sort.attribute=="name" && filters.sort.type=="desc" && (
                    <SwapVertIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                )}
                Name
              </button>
              <button onClick={()=>changeSortSettings('status')} className='flex justify-center items-center gap-1'>
                {filters.sort.attribute!="status" && (
                    <CircleIcon sx={{ fontSize:{ xs:7, sm:7, md:7} }}/>
                )}
                {filters.sort.attribute=="status" && filters.sort.type=="asc" && (
                    <>
                        <SortByAlphaOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                        <SwapVertIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                    </>
                )}
                {filters.sort.attribute=="status" && filters.sort.type=="desc" && (
                    <SwapVertIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                )}
                Statu
              </button>
              <button onClick={()=>changeSortSettings('species')} className='flex justify-center items-center gap-1'>
                {filters.sort.attribute!="species" &&  (
                    <CircleIcon sx={{ fontSize:{ xs:7, sm:7, md:7} }}/>
                )}
                {filters.sort.attribute=="species" && filters.sort.type=="asc" && (
                    <>
                        <SortByAlphaOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                        <SwapVertIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                    </>
                )}
                {filters.sort.attribute=="species" && filters.sort.type=="desc" &&  (
                    <SwapVertIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                )}
                Species
              </button>
              <button onClick={()=>changeSortSettings('gender')}> Gender </button>
              
            </div>
            
          </div>
  )
}

export default CharacterTableHead
