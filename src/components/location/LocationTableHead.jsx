import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';
import useFilterStore from '../../store/FilterStore';

const LocationTableHead = () => {

  const setSort=useFilterStore((state)=>state.setSort);
  const filters=useFilterStore((state)=>state.filters)

  return (
    <div className='flex justify-between items-center px-2 border-b border-black dark:border-white pb-1 mb-2'>
            
            <div className='grid grid-cols-3  gap-2 w-full text-center'>
              
              <button onClick={()=>setSort('name')} className='flex justify-center items-center gap-1'>
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
              <button onClick={()=>setSort('type')} className='flex justify-center items-center gap-1'>
                {filters.sort.attribute!="type" && (
                    <CircleIcon sx={{ fontSize:{ xs:7, sm:7, md:7} }}/>
                )}
                {filters.sort.attribute=="type" && filters.sort.type=="asc" && (
                    <>
                        <SortByAlphaOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                        <SwapVertIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                    </>
                )}
                {filters.sort.attribute=="type" && filters.sort.type=="desc" && (
                    <SwapVertIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                )}
                Type
              </button>

              <button onClick={()=>setSort('dimension')} className='flex justify-center items-center gap-1'>
                {filters.sort.attribute!="dimension" && (
                    <CircleIcon sx={{ fontSize:{ xs:7, sm:7, md:7} }}/>
                )}
                {filters.sort.attribute=="dimension" && filters.sort.type=="asc" && (
                    <>
                        <SortByAlphaOutlinedIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                        <SwapVertIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                    </>
                )}
                {filters.sort.attribute=="dimension" && filters.sort.type=="desc" && (
                    <SwapVertIcon sx={{ fontSize:{ xs:15, sm:15, md:15} }}/>
                )}
                Dimension
              </button>
                   
            </div>
            
          </div>
  )
}

export default LocationTableHead
