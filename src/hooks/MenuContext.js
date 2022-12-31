import { createContext, useState } from 'react';

const MenuContext = createContext({});

export const MenuProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [navBar, setNavBar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const showNavBar = () => {
    setNavBar(true);
  };

  return (
    <MenuContext.Provider
      value={{
        navBar,
        setNavBar,
        showNavBar,
        showMenu,
        setShowMenu,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
