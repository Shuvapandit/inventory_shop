import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../pages/Shared/NavBar/NavBar'
import SideNav from '../pages/Shared/SideNav/SideNav'


const Main = () => {

 
  return (
    <div>
    <NavBar/>
    <div className='flex'  >
    <div className='lg:w-1/5 '>
    <SideNav/>
    </div>  
    <div className='lg:w-4/5 ' >
   <Outlet></Outlet> 
    </div>
    </div>
    
    
    </div>
  )
}

export default Main