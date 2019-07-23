import React from 'react'

import './NavBar.scss'
import { NavLink } from 'react-router-dom';
export const NavBar = () => {
  return (
    <nav className="top-navbar">
      <NavLink to="/">Cookie Shop</NavLink>
      <NavLink to="/cookies/new">New Cookie</NavLink>
      <NavLink to="/cookies">Cookies</NavLink>
    </nav>
  )
}
