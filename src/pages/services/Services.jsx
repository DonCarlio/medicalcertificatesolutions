import React, { useContext } from 'react';
import Experience from '../../components/experience/Experience';
import MenuContext from '../../hooks/MenuContext';
import Service from '../../components/services/Services';

const Services = () => {
  const {showMenu} = useContext(MenuContext);
  return (
    <>
      {!showMenu
        ? (<>
            <Experience />
            <Service />
        </>)
        : undefined
      }
    </>
  )
}

export default Services