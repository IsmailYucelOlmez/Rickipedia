import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchandFilterBar = ({placeholder}) => {

  const searchFilter=()=>{

  }

  return (
    <div className='flex justify-between items-center mb-6'>
      <div className='flex justify-center items-center w-1/4 gap-2'>
        <div className='flex justify-center items-center gap-1 w-full '>
          <input type="text" name="" id="searchInput" className='w-full outline-none border border-black rounded-xl px-2 py-1 ' placeholder={placeholder} />
          <button onClick={()=>searchFilter()} className='flex justify-center items-center'><SearchIcon sx={{ fontSize:{ xs:15, sm:20, md:25} }}/></button>
        </div>
        <button  className=''>Clear</button>
      </div>
      <div className='flex gap-4'>
        <select name="" id="" className='border border-black outline-none rounded-xl px-2 py-1'>
            <option value="">20 Row</option>
            <option value="">40 Row</option>              
        </select>
        <select name="" id="" className='border border-black outline-none rounded-xl px-2 py-1'>
            <option value="">All</option>
            <option value="">Alive</option>
            <option value="">Dead</option>
            <option value="">Unknown</option>
        </select>
        <select name="" id="" className='border border-black outline-none rounded-xl px-2 py-1'>
            <option value="">All</option>
            <option value="">Human</option>
            <option value="">Alien</option>    
        </select>
        <select name="" id="" className='border border-black outline-none rounded-xl px-2 py-1'>
            <option value="">All</option>
            <option value="">Male</option>
            <option value="">Female</option>        
            <option value="">Genderless</option>
            <option value="">Unknown</option>   
        </select>
      </div>
    </div>
  )
}

export default SearchandFilterBar
