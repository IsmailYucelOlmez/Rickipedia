import React, { useEffect, useId, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom';
import {statuOptions,genderOptions,speciesOptions, sizeOptions} from '../assets/SelectOptions'
import Select from 'react-select';

const SearchandFilterBar = ({placeholder,setFilters}) => {

  const [pageLength,setPageLength]=useState(sizeOptions[0]);
  const [status,setStatus]=useState();
  const [species,setSpecies]=useState();
  const [gender,setGender]=useState();
  
  const resetPageValue=()=>{

    setFilters(prev=>({...prev,page:'1'}))
  }

  const changeLength=(selectedItems)=>{

    setPageLength(selectedItems)
  }

  const changeStatus= (selectedItems)=>{

    setStatus(selectedItems)
    setFilters(prev=>({...prev,status:[]}))

    selectedItems.map((item)=>{

      setFilters(prev=>({...prev,status:[...prev.status,item.value]}))
    })

    resetPageValue();
    
  }

  const changeSpecies=(selectedItems)=>{
   
    setSpecies(selectedItems)
    setFilters(prev=>({...prev,species:[]}))

    selectedItems.map((item)=>{

      setFilters(prev=>({...prev,species:[...prev.species,item.value]}))
    })

    resetPageValue();
  }

  const changeGenders=(selectedItems)=>{
    
    setGender(selectedItems)
    setFilters(prev=>({...prev,gender:[]}))

    selectedItems.map((item)=>{

      setFilters(prev=>({...prev,gender:[...prev.gender,item.value]}))
    }) 

    resetPageValue();
  }
  

  const location=useLocation();

  return (
    <div className='flex justify-between items-center mb-6 gap-4'>
      <div className='flex justify-center items-center w-1/4 gap-2'>
        <div className='flex justify-center items-center gap-1 w-full '>
          <input type="text" name="" id="searchInput" className='w-full outline-none border border-black rounded-xl px-2 py-1 ' placeholder={placeholder} />
          <button onClick={()=>searchFilter()} className='flex justify-center items-center'><SearchIcon sx={{ fontSize:{ xs:15, sm:20, md:25} }}/></button>
        </div>
        <button  className=''>Clear</button>
      </div>
      <div className='flex gap-4 flex-1 justify-end items-center'>
          <Select
            defaultValue={sizeOptions[0]}         
            value={pageLength}
            onChange={changeLength}
            name="length"
            options={sizeOptions}
            className="p-0 text-xs"
            
          />  
        {location.pathname=="/characters" && (
          <>
            <Select
              defaultValue={[]}
              isMulti
              value={status}
              onChange={changeStatus}
              name="status"
              options={statuOptions}
              className="p-0 text-xs"
              placeholder="Statu"
              
            />   
            <Select
              defaultValue={[]}
              isMulti
              value={species}
              onChange={changeSpecies}
              name="species"
              options={speciesOptions}
              className="p-0 text-xs"
              placeholder="Species"
            />  
            <Select
              defaultValue={[]}
              isMulti
              value={gender}
              onChange={changeGenders}
              name="genders"
              options={genderOptions}
              className="p-0 text-xs"
              placeholder="Gender"
            />  
          </>
          
        )}
        
      </div>
    </div>
  )
}

export default SearchandFilterBar
