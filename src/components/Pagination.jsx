import React, { useEffect, useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useFilterStore from '../store/FilterStore';


const Pagination = ({dataLength}) => {

    const [paginationPages,setPaginationPages]=useState([]);

    const currentPage=useFilterStore((state)=>state.filters.page)
    const pageSize=useFilterStore((state)=>state.filters.pageSize)
    const {updateFilters}=useFilterStore();

    let pages= [];


    for(let i=1;i<=Math.ceil(dataLength/pageSize);i++){

        pages.push(i);
    }

    const totalPages = pages.length
    const delta = 2; // Current sayfa etrafındaki sayfa sayısı

    useEffect(()=>{

        let start = Math.max(1, currentPage - delta);
        let end = Math.min(totalPages, currentPage + delta);

        // Eğer başlangıç veya bitiş aralığı 5 sayfadan azsa, bunu dengele
        if (currentPage <= delta) {
            end = Math.min(5, totalPages);
        } else if (currentPage > totalPages - delta) {
            start = Math.max(1, totalPages - 4);
        }

        const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
        setPaginationPages(pages);
   
    },[currentPage])

    const nextPage=()=>{

        if(currentPage<pages.length) selectPage(currentPage+1);     
    }
    
    const prevPage=()=>{
      
        if(currentPage>1) selectPage(currentPage-1); 
    }

    const selectPage=(page)=>{

        updateFilters({page:page})

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    

  return (
    dataLength > 0 && (
    <div className='flex flex-wrap items-center gap-3 mb-5 pt-5 px-5 border-t border-black dark:border-white'>

        {currentPage!=1 && (
            
            <button onClick={()=>prevPage()} className='flex justify-center items-center '><ChevronLeftIcon sx={{ fontSize:{ xs:15, sm:15, md:25} }}/></button> 
        )}

        {
            paginationPages.map((page,index)=>{
                return  <button onClick={()=>selectPage(page)} key={index} className={`w-6 h-6 rounded-full ${currentPage==page ?'bg-[#FD49A0] dark:bg-[#08C952] border-white text-white':'border-black'} border flex justify-center items-center`}>
                            <p className='xs:text-sm lg:text-base'>{page}</p>
                        </button>    
            })
        }

        {currentPage!=pages.length && (
            
            <button onClick={()=>nextPage()}  className='flex justify-center items-center'><ChevronRightIcon sx={{ fontSize:{ xs:15, sm:15, md:25} }}/></button>
        )}
        
    </div>
    )
  )
}

export default Pagination