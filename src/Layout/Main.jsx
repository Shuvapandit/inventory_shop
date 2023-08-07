import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../pages/Shared/NavBar/NavBar'

const Main = () => {
  return (
    <div>
    <NavBar/>
    <Outlet></Outlet>
    </div>
  )
}

export default Main