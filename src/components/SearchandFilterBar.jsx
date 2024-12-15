import React, { useEffect, useId, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom';
import {statuOptions,genderOptions,speciesOptions, sizeOptions} from '../assets/SelectOptions'
import Select from 'react-select';
import useFilterStore from '../store/FilterStore';

const SearchandFilterBar = ({placeholder}) => {

  const [pageLength,setPageLength]=useState(sizeOptions[0]);
  const [status,setStatus]=useState();
  const [species,setSpecies]=useState();
  const [gender,setGender]=useState();
  const [name,setName]=useState();
    
  const location=useLocation();

  const {updateFilters}=useFilterStore()
  
  const resetName=()=>{

    setName("");
    updateFilters({name:""})
  }

  const handleNameInput=(e)=>{

    if(e.key=="Enter" && name){
      updateFilters({name:name})
      e.target.blur()
    }
  }

  const changeName=()=>{

    if(name) updateFilters({name:name})
  }

  const changeLength=(selectedItem)=>{

    setPageLength(selectedItem)  
    updateFilters({pageSize:selectedItem.value})

    updateFilters({page:1})
  }

  const changeStatus= (selectedItem)=>{

    setStatus(selectedItem)
    updateFilters({status:[selectedItem.value]})

    updateFilters({page:1});
  }

  const changeSpecies=(selectedItem)=>{
   
    setSpecies(selectedItem)
    updateFilters({species:[selectedItem.value]})

    updateFilters({page:1})
  }

  const changeGenders=(selectedItem)=>{
    
    setGender(selectedItem)
    updateFilters({gender:[selectedItem.value]})

    updateFilters({page:1})
  }


  return (
    <div className='flex xs:flex-wrap md:flex-nowrap justify-between items-center mb-6 xs:gap-2 md:gap-4'>
      <div className='flex justify-center items-center xs:w-3/4 md:w-1/4 gap-2'>
        <div className='flex justify-center items-center gap-1 w-full '>
          <input value={name} onKeyDown={(e)=>handleNameInput(e)} onChange={(e)=>setName(e.target.value)} type="text" name="" id="searchInput" className='w-full outline-none border border-black rounded-xl xs:px-1 md:px-2 py-1 xs:text-sm md:text-base dark:bg-[#293241] dark:border-white' placeholder={placeholder} />
          <button onClick={()=>changeName()} className='flex justify-center items-center'><SearchIcon sx={{ fontSize:{ xs:15, sm:20, md:25} }}/></button>
        </div>
        <button onClick={()=>resetName()} className='text-sm'>Clear</button>
      </div>
      <div className='flex gap-4 flex-1 justify-end items-center'>
          <Select
            defaultValue={sizeOptions[0]}         
            value={pageLength}
            onChange={changeLength}
            name="length"
            options={sizeOptions}
            className="p-0 text-xs text-black"
            
          />  
        {location.pathname=="/characters" && (
          <>
            <Select
              defaultValue={[]}          
              value={status}
              onChange={changeStatus}
              name="status"
              options={statuOptions}
              className="p-0 text-xs text-black"
              placeholder="Statu"                       
            />   
            <Select
              defaultValue={[]}       
              value={species}
              onChange={changeSpecies}
              name="species"
              options={speciesOptions}
              className="p-0 text-xs text-black"
              placeholder="Species"
            />  
            <Select
              defaultValue={[]}             
              value={gender}
              onChange={changeGenders}
              name="genders"
              options={genderOptions}
              className="p-0 text-xs text-black"
              placeholder="Gender"
            />  
          </>
          
        )}
        
      </div>
    </div>
  )
}

export default SearchandFilterBar
