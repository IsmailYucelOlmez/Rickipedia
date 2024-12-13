import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/RMLogo.svg'
import Image from '../components/Image'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import useSettingsStore from '../store/settingsStore';

const Header = () => {

  const {theme,setTheme}=useSettingsStore();

  const toggleTheme=()=>{

    if(theme=="dark"){ setTheme("light"); localStorage.setItem('theme','light')}
    else{ setTheme("dark"); localStorage.setItem('theme','dark') }
     
  }

  return (
    <header className='lg:h-16 border-b border-black dark:border-white w-full flex justify-around items-center'>
      <Link to={"/"} className='flex justify-center items-center gap-2'>
        <Image src={Logo} className={"w-11 h-11"} />
        <h1 className='font-sourGummy text-xl'>Rickipedia</h1>
      </Link>

      <nav className='flex justify-center items-center gap-4'>
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
      
    </header>
  )
}

export default Header
