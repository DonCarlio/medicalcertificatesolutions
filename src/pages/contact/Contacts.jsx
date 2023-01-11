import React, { useContext } from 'react';
import MenuContext from '../../hooks/MenuContext';
import Contact from '../../components/contact/Contact';

const Contacts = () => {
  const {showMenu} = useContext(MenuContext);
  return (
    <>
      {!showMenu
        ? <Contact />
        : undefined
      }
    </>
  )
}

export default Contacts