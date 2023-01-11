import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import Qualities from '../../components/qualities/Qualities';
import About from '../../components/about/About';
import Samples from '../../components/samples/Samples';
import MenuContext from '../../hooks/MenuContext';
const Landing = () => {
  const {showMenu} = useContext(MenuContext);
  return (
    <div>
      {!showMenu ?
      <><Header /><About /><Qualities /><Samples /></>
      : <div></div>
    }
    </div>
  )
}

export default Landing