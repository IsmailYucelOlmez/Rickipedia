import React from 'react'

const SearchandFilterBar = ({placeholder}) => {
  return (
    <div className='flex justify-between items-center mb-6'>
      <div>
        <input type="text" name="" id="searchInput" className='outline-none border border-black rounded-xl px-2 py-1 ' placeholder={placeholder} />
      </div>
      <div className='flex gap-4'>
      <select name="" id="" className='border border-black outline-none rounded-xl px-2 py-1'>
            <option value="">20 Row</option>
            <option value="">5 Row</option>              
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
      </div>
    </div>
  )
}

export default SearchandFilterBar
