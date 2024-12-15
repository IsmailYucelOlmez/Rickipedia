import React, { useEffect, useId, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom';
import {statuOptions,genderOptions,speciesOptions, sizeOptions} from '../assets/SelectOptions'
import Select from 'react-select';
import useFilterStore from '../store/FilterStore';
import useSettingsStore from '../store/settingsStore';

const SearchandFilterBar = ({placeholder}) => {

  const [pageLength,setPageLength]=useState(sizeOptions[0]);
  const [status,setStatus]=useState();
  const [species,setSpecies]=useState();
  const [gender,setGender]=useState();
  const [name,setName]=useState();
    
  const location=useLocation();

  const {filters,updateFilters}=useFilterStore()
  const {theme}=useSettingsStore();
  
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

  const changeFilters=()=>{
    setName(""); 
    updateFilters({name:""})

    setPageLength({label:`${filters.pageSize} Row` ,value:filters.pageSize})
    setStatus({label:`${filters.status.length>0 ? filters.status[0].charAt(0).toUpperCase() + filters.status[0].slice(1).toLowerCase() : 'All'}`,value:filters.status.length>0 ? filters.status: [] })
    setSpecies({label:`${filters.species.length>0 ? filters.species[0].charAt(0).toUpperCase() + filters.species[0].slice(1).toLowerCase() : 'All'}`,value:filters.species.length>0 ? filters.species: []})
    setGender({label:`${filters.gender.length>0 ? filters.gender[0].charAt(0).toUpperCase() + filters.gender[0].slice(1).toLowerCase() : 'All'}`,value:filters.gender.length>0 ? filters.gender: []})
    
    updateFilters({page:1})
  }

  useEffect(()=>{
    
    changeFilters();
  },[])

  

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: theme=="light" ? '#fff':"#293241", // Arka plan siyah
      color: theme=="light" ? '#000':"white", // Metin beyaz
      borderColor: theme=="light" ? '#000':"white", // Çerçeve beyaz
      borderRadius:'15px',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme=="light" ? '#fff':"#293241", // Dropdown arka plan siyah
      color: theme=="light" ? '#000':"white", // Dropdown metin beyaz
      borderColor: theme=="light" ? '#000':"white",
      borderRadius:'15px'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme=="light" ? '#000':"white", // Seçili değer beyaz
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "gray", // Placeholder gri
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? theme=="light" ? "#E5E5E5":"gray" : theme=="light" ? '#fff':"#293241", // Üzerine gelindiğinde daha açık siyah
      color: theme=="light" ? '#000':"white", // Seçenek metni beyaz
      borderRadius:'10px'
    }),
    menuList: (base) => ({
      ...base,
  
      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
      },
      borderRadius:'15px'
    }),
  };


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
            styles={customStyles}
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
              styles={customStyles}                      
            />   
            <Select
              defaultValue={[]}       
              value={species}
              onChange={changeSpecies}
              name="species"
              options={speciesOptions}
              className="p-0 text-xs text-black"
              placeholder="Species"
              styles={customStyles}
            />  
            <Select
              defaultValue={[]}             
              value={gender}
              onChange={changeGenders}
              name="genders"
              options={genderOptions}
              className="p-0 text-xs text-black"
              placeholder="Gender"
              styles={customStyles}
            />  
          </>
          
        )}
        
      </div>
    </div>
  )
}

export default SearchandFilterBar
