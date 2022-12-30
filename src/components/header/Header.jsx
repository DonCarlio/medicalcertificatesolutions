import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <NavLink to='/about' onClick={() => {}} className={({ isActive }) => isActive ? 'active-link' : 'normal-link'}>
        About
      </NavLink>
    </div>
  )
}

export default Header