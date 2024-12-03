import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/RMLogo.svg'
import Image from '../components/Image'

const Header = () => {
  return (
    <div className='lg:h-16 border-b border-black w-full flex justify-around items-center'>
      <Link to={"/"} className='flex justify-center items-center gap-2'>
        <Image src={Logo} className={"w-11 h-11"} />
        <h1 className='font-sourGummy text-xl'>Rickipedia</h1>
      </Link>

      <div className='flex justify-center items-center gap-4'>
        <NavLink to={"/characters"} className={({isActive})=>`${isActive ? 'font-semibold':''}`}>Characters</NavLink>
        <NavLink to={"/locations"} className={({isActive})=>`${isActive ? '':''}`}>Locations</NavLink>
        <NavLink to={"/episodes"} className={({isActive})=>`${isActive ? '':''}`}>Episodes</NavLink>
      </div>
      
    </div>
  )
}

export default Header
