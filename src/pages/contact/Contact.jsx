import React, { useContext } from 'react';
import MenuContext from '../../hooks/MenuContext';

const Contact = () => {
  const {showMenu} = useContext(MenuContext);
  return (
    <>
      {!showMenu
        ? <div>Contact</div>
        : undefined
      }
    </>
  )
}

export default Contact