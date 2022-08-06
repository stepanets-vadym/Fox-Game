// React
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Context
import { MenuContent } from 'interfaces/MenuContent.types';

// Components & elements
import Header from 'components/header/Header';
import NavMenu from 'components/navMenu/NavMenu';

const AppHeader = () => {
  const [navMenu, setNavMenu] = useState<string>('closing');
  const [sideBarMenu, setSideBarMenu] = useState<boolean>(false);
 

  const location = useLocation();
  
  


  useEffect(() => {
    setNavMenu(MenuContent.CLOSING)
    setSideBarMenu(false)
  }, [location]);

  return (
    <>
      <Header navMenu={navMenu} setNavMenu={setNavMenu} sideBarMenu={sideBarMenu} setSideBarMenu={setSideBarMenu} />

      {/* Navigation Menu */}
      {navMenu !== MenuContent.CLOSING ? (
        <NavMenu navMenu={navMenu} setNavMenu={setNavMenu} />
      ) : null}

      {/* SideBarNavigation */}
    </>
  );
};

export default AppHeader;
