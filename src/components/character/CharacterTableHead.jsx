import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';
import useFilterStore from '../../store/FilterStore';

const CharacterTableHead = () => {

  const setSort=useFilterStore((state)=>state.setSort);
  const filters=useFilterStore((state)=>state.filters)

  return (
    <div className='flex justify-between items-center px-2 border-b border-black dark:border-white pb-1 mb-2'>
            <div className='xs:w-14 md:w-28'>
              <p></p>
            </div>
            <div className='grid grid-cols-4  gap-2 w-full text-center xs:text-xs md:text-base'>
              
              <button onClick={()=>setSort('name')} className='flex justify-center items-center gap-1'>
                {filters.sort.attribute!="name" && (
                    <CircleIcon sx={{ fontSize:{ xs:5, sm:7, md:7} }}/>
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
              <button onClick={()=>setSort('status')} className='flex justify-center items-center gap-1'>
                {filters.sort.attribute!="status" && (
                    <CircleIcon sx={{ fontSize:{ xs:5, sm:7, md:7} }}/>
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
              <button onClick={()=>setSort('species')} className='flex justify-center items-center gap-1'>
                {filters.sort.attribute!="species" &&  (
                    <CircleIcon sx={{ fontSize:{ xs:5, sm:7, md:7} }}/>
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

              <button disabled>Gender</button>
              
            </div>
            
          </div>
  )
}

export default CharacterTableHead
