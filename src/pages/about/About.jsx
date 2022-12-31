import React, { useContext } from 'react';
import MenuContext from '../../hooks/MenuContext';

const About = () => {
  const {showMenu} = useContext(MenuContext);
  return (
    <>
      {!showMenu
        ? <div>About</div>
        : undefined
      }
    </>
  )
}

export default About