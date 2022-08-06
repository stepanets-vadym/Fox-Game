// React
import classNames from 'classnames';
import { FC, useContext } from 'react';

// Components & elements
import GameMenu from 'elements/gameMenu/GameMenu';
import ESportMenu from 'elements/eSportMenu/ESportMenu';

// Context

// Styles
import styles from './NavMenu.module.scss';
import globalStyle from '../../styles/global/global.module.scss';

// Types
import { MenuContent } from 'interfaces/MenuContent.types';
import LoginWindow from 'elements/loginWindow/LoginWindow';
import SideBarNavigation from 'components/sideBarNavigation/SideBarNavigation';
import CartWindow from 'components/cartWindow/CartWindow';

// Interfases
interface Props {
  navMenu: string;
  setNavMenu: (navMenu: string) => void;
}

const NavMenu: FC<Props> = ({ navMenu, setNavMenu }) => {
  // Open modal window
  let modalClass = navMenu
    ? classNames(styles.gamesMenu, styles.active)
    : styles.modal;

  let logWindow =
    navMenu === MenuContent.LOGIN
      ? classNames(
          styles.logWindow,
          globalStyle.container,
          'animate__animated animate__fadeInDown'
        )
      : styles.close;

  let CarttWindow =
    navMenu === MenuContent.CART
      ? classNames(
          styles.cartWindow,
          globalStyle.container,
          'animate__animated animate__fadeInDown'
        )
      : styles.close;

  return (
    // Game menu should open on klick on navigation item

    <div className={modalClass} onClick={() => setNavMenu(MenuContent.CLOSING)}>
      {/* Log window */}
      <div className={logWindow} >
        {navMenu === MenuContent.LOGIN && <LoginWindow />}
      </div>
      {/* Cart window */}
      <div className={CarttWindow}>
        {navMenu === MenuContent.CART && <CartWindow navMenu={navMenu} setNavMenu={setNavMenu} />}
      </div>

      {/* SideBarNavigation */}
      {navMenu === MenuContent.SIDEBAR && (
        <SideBarNavigation navMenu={navMenu} setNavMenu={setNavMenu} />
      )}
      {/* Menu Window */}
      <div
        className={
          navMenu === MenuContent.GAME
            ? classNames(
                styles.wrapper,
                'animate__animated animate__fadeInDown'
              )
            : styles.close
        }
        onClick={(e) => e.stopPropagation()}
      >
        {/* Game menu */}
        {navMenu === MenuContent.GAME && <GameMenu />}
      </div>

      <div
        className={
          navMenu === MenuContent.ESPORT
            ? classNames(
                styles.wrapper,
                'animate__animated animate__fadeInDown'
              )
            : styles.close
        }
        onClick={(e) => e.stopPropagation()}
      >
        {/* Esport Menu */}
        {navMenu === MenuContent.ESPORT && <ESportMenu />}
      </div>
    </div>
  );
};

export default NavMenu;
