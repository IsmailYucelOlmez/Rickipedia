import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/RMLogo.svg'
import Image from '../components/Image'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import useSettingsStore from '../store/settingsStore';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

  const {theme,setTheme,sidebar,setSidebar}=useSettingsStore();

  const toggleTheme=()=>{

    if(theme=="dark"){ setTheme("light"); localStorage.setItem('theme','light')}
    else{ setTheme("dark"); localStorage.setItem('theme','dark') }
     
  }

  const toggleSidebar=()=>{

    if(sidebar==false) setSidebar(true)
    else setSidebar(false)  

  }

  return (
    <header className='xs:h-12 md:h-16 border-b border-black dark:border-white w-full flex xs:justify-between md:justify-around items-center xs:px-3 md:px-0'>
      <Link to={"/"} className='flex justify-center items-center gap-2'>
        <Image src={Logo} className={"xs:w-9 md:w-11 xs:h-9 md:h-11"} />
        <h1 className='font-sourGummy xs:text-lg md:text-xl'>Rickipedia</h1>
      </Link>

      <nav className='xs:hidden md:flex justify-center items-center gap-4'>
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

      <button onClick={()=>toggleSidebar()} className="xs:block md:hidden" ><MenuIcon sx={{ fontSize:{ xs:20, sm:20, md:20} }}/></button>
      
    </header>
  )
}

export default Header
