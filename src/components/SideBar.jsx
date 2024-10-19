import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function SideBar() {
 
  return (
    <div className='w-[25%] bg-emerald-100 border-[3px]  h-[89vh] flex flex-col font-serif sm:w-[20%] gap-4'>

      <NavLink
        to="/posts"
        className={({ isActive }) => (isActive ? 'text-red-700 font-bold text-xl ' : 'text-black text-xl')}
      >
        see posts
      </NavLink>


      <NavLink
        to="/createPost"
        className={({ isActive }) => (isActive ? 'text-red-700 font-bold text-xl' : 'text-black text-xl') }
        
      >create posts
      </NavLink>

      <NavLink
        to="/favorite"
        className={({ isActive }) => (isActive ? 'text-red-700 font-bold text-xl' : 'text-black text-xl') }
        
      >Favorite posts
      </NavLink>

    </div>

  )
}

export default SideBar