import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import useSettingsStore from '../store/settingsStore'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';


const Sidebar = () => {

  const {sidebar,setSidebar,theme,setTheme}=useSettingsStore();  
    
  const closeMenu=()=>{

    setSidebar(false)
  }

  const toggleTheme=()=>{

    if(theme=="dark"){ setTheme("light"); localStorage.setItem('theme','light')}
    else{ setTheme("dark"); localStorage.setItem('theme','dark') }
     
  }


  return (
    <div onClick={()=>closeMenu()} className={` ${sidebar ? 'xs:flex':'xs:hidden'}  lg:hidden w-full h-full  z-50 backdrop-blur-sm fixed`}>
      <div onClick={()=>closeMenu()} className={`fixed xs:w-1/2 md:w-1/3 h-full bg-[#fff] dark:bg-[#293241] border-r border-white  top-0 right-0 flex flex-col justify-start items-center py-5 gap-8`}>     

        <div></div>

        <nav className='xs:flex md:hidden xs:flex-col justify-center items-center gap-4'>
            <NavLink to={"/characters"} className={({isActive})=>`${isActive ? 'font-semibold':''}`}>Characters</NavLink>
            <NavLink to={"/locations"} className={({isActive})=>`${isActive ? 'font-semibold':''}`}>Locations</NavLink>
            <NavLink to={"/episodes"} className={({isActive})=>`${isActive ? 'font-semibold':''}`}>Episodes</NavLink>
            <button onClick={()=>toggleTheme()}>
                {theme=="dark" ? (
                    <WbSunnyOutlinedIcon sx={{ fontSize:{ xs:15, sm:20, md:20} }}/>
                ) : (
                    <DarkModeOutlinedIcon sx={{ fontSize:{ xs:15, sm:20, md:20} }}/>
                ) }
            </button>     
        </nav>

      </div>
    </div>
  )
}

export default Sidebar