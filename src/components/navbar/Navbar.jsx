import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MenuContext from '../../hooks/MenuContext';
import './Navbar.css';

const activeStyle = {
  background: '#84cc1f',
  color: 'white',
};

const Navbar = () => {
  const { sideBar, setSideBar } = useContext(MenuContext);
  return (
    <nav className={sideBar ? 'mobile-menu' : 'navbar'}>
      <div>
        <h2 className="logo logo-name">Medical Certificate Solutions</h2>
      </div>
      <div
        className="links"
        onClick={() => setSideBar(false)}
        role="presentation"
      >
        <NavLink
          to="/"
          className="navlink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="navlink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className="navlink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Our Services
        </NavLink>
        <NavLink
          to="/contact"
          className="navlink"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact Us
        </NavLink>
      </div>
      <div className="footer">
        <p> &copy; Medical Certificate Solutions 2022 </p>
      </div>
      <button
        type="button"
        onClick={() => setSideBar(false)}
        className="close-menu"
      >
        Close Menu
      </button>
    </nav>
  )
}

export default Navbar