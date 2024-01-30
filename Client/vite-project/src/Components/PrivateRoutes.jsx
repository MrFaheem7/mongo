import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    
    let auth=localStorage.getItem('token')
  
  return (
    <div>{auth? <Outlet/> :<Navigate to='/login'/>}</div>
  )
}

export default PrivateRoutes