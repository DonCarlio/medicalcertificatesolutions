import React, { useContext } from 'react';
import MenuContext from '../../hooks/MenuContext';

const Services = () => {
  const {showMenu} = useContext(MenuContext);
  return (
    <>
      {!showMenu
        ? <div>Services</div>
        : undefined
      }
    </>
  )
}

export default Services