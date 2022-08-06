// React
import classNames from 'classnames';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';

// Components & elements
import Navigation from 'components/navigation/Navigation';
import LoginBlock from 'components/loginBlock/LoginBlock';
import { Logo } from 'elements/logo/Logo';
import Burger from 'elements/burger/Burger';
import NavCart from 'elements/navCart/NavCart';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Header.module.scss';

// Intertfases
interface Props { 
  navMenu: string;
  setNavMenu: (navMenu: string) => void;
  sideBarMenu: boolean;
  setSideBarMenu: (sideBarMenu: boolean) => void;
}

const Header: FC<Props> = ({
  navMenu,
  setNavMenu,
  sideBarMenu,
  setSideBarMenu,
}) => {
  const location = useLocation();

  return (
    // Header

    <header className={styles.header}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        {/* Logo */}
        <Logo />
        {/* Navigation */}
        <Navigation navMenu={navMenu} setNavMenu={setNavMenu} />

        <div className={styles.controler}>
          {/* Cart */}
          {location.pathname === '/shop' && (
            <NavCart navMenu={navMenu} setNavMenu={setNavMenu} />
          )}
          {/* Burger */}
          <Burger
            sideBarMenu={sideBarMenu}
            setSideBarMenu={setSideBarMenu}
            navMenu={navMenu}
            setNavMenu={setNavMenu}
          />
          {/* Log */}
          <LoginBlock navMenu={navMenu} setNavMenu={setNavMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
