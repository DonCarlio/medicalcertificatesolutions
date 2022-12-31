import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuContext from '../../hooks/MenuContext';
import { AiOutlineMenu } from 'react-icons/ai';
import './Navbar.css';

const activeStyle = {
  background: '#84cc1f',
  color: 'white',
};

const Navbar = () => {
  const { navBar, setNavBar, setScreenSize, screenSize, showMenu, setShowMenu } = useContext(MenuContext);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setNavBar(false);
    } else {
      setNavBar(true);
    }
  }, [screenSize]);
  return (
    <>
      {
        navBar
         ? <nav className='navbar'>
            <div>
              <h2 className="logo logo-name">Medical Certificate Solutions</h2>
            </div>
            <div
              className="links"
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
          </nav>
        : showMenu
        ? <div className='mobile-menu'>
            <div>
              <h2 className="logo logo-name">Medical Certificate Solutions</h2>
            </div>
            <div
              className="mobile-links"
              role="presentation"
            >
              <NavLink
                to="/"
                className="navlink"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => {setShowMenu(false)}}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="navlink"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => {setShowMenu(false)}}
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className="navlink"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => {setShowMenu(false)}}
              >
                Our Services
              </NavLink>
              <NavLink
                to="/contact"
                className="navlink"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => {setShowMenu(false)}}
              >
                Contact Us
              </NavLink>
            </div>
            <button type='button' onClick={() => {setShowMenu(false)}} className="close-menu">Close Menu</button>
          </div>
        : <div className='navbar'>
            <h2 className="logo logo-name">Medical Certificate Solutions</h2>
            <AiOutlineMenu className='bigger' onClick={() => {setShowMenu(true)}}/>
        </div>
      }
    </>
  )
}

export default Navbar
