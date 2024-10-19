import React, { useContext } from 'react'
import Headers from './Header'
import SideBar from './SideBar'
import { NavLink, Outlet } from 'react-router-dom'


function Home() {


  return (

    <div>
         <Headers></Headers>
         
         <div className='flex'>
         <SideBar></SideBar>

         <div className=' w-[75%] h-[89vh] text-black flex flex-wrap gap-3 overflow-y-auto justify-center items-center'>
           <Outlet/>
         </div>

         </div>
    </div>
    
  )
}

export default Home