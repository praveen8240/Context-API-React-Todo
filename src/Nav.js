import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav'>
        <NavLink className='navlink' to='/'>Todo</NavLink>
        <NavLink className='navlink' to='/Completed'>Completed</NavLink>
    </div>
  )
}

export default Nav
