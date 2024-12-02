import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='lg:h-16 border-b border-black w-full flex justify-around items-center'>
      <Link to={"/"}>
        <h1>Ricky's Mind Palace</h1>
      </Link>

      <div className='flex justify-center items-center gap-2'>
        <NavLink to={"/"} className={({isActive})=>`${isActive ? '':''}`}>Characters</NavLink>
        <NavLink to={"/"} className={({isActive})=>`${isActive ? '':''}`}>Locations</NavLink>
        <NavLink to={"/"} className={({isActive})=>`${isActive ? '':''}`}>Episodes</NavLink>
      </div>
      
    </div>
  )
}

export default Header
