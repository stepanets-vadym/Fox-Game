// React
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FC, useState } from 'react';

// Components & elements
import ESportMenu from 'elements/eSportMenu/ESportMenu';
import GameMenu from 'elements/gameMenu/GameMenu';
import { Logo } from 'elements/logo/Logo';
import Icon from 'elements/icon/Icon';

// Styles
import styles from './SideBarNavigation.module.scss';
import globalStyle from '../../styles/global/global.module.scss';
import { MenuContent } from 'interfaces/MenuContent.types';
import { HOME_ROUTE, NEWS_ROUTE, SHOP_ROUTE } from 'utils/consts';
import { SideBarDropDown } from 'interfaces/SideBarDropDown.types';

// interfaces
interface Props {
  navMenu: string;
  setNavMenu: (navMenu: string) => void;
}

const SideBarNavigation: FC<Props> = ({ navMenu, setNavMenu }) => {
  const [sideDropDown, setSideDropDown] = useState<string>(
    SideBarDropDown.CLOSING
  );

  let modalClass =
    navMenu === MenuContent.SIDEBAR
      ? classNames(styles.sideBarNavigation, styles.active)
      : styles.sideBarNavigation;

  return (
    // Navigation Block
    <div
      className={
        navMenu === MenuContent.SIDEBAR
          ? classNames(styles.wrapper, 'animate__animated animate__fadeInLeft')
          : styles.wrapper
      }
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.logoBlock}>
        <Logo />
        <div
          className={styles.icon}
          onClick={() => setNavMenu(MenuContent.CLOSING)}
        >
          <Icon name={'#icon-cross'} />
        </div>
      </div>
      <nav className={styles.navigation}>
        {/* Nav Item */}
        <Link to={HOME_ROUTE} className={styles.navItem}>
          На главную
        </Link>

        {/* Nav Item + dropDown */}
        <div
          className={classNames(styles.dropDown, styles.navItem)}
          onClick={() =>
            setSideDropDown(
              sideDropDown !== SideBarDropDown.GAME
                ? SideBarDropDown.GAME
                : SideBarDropDown.CLOSING
            )
          }
        >
          <div className={styles.text}>
            Игры
            <div className={styles.arrow}>
              <Icon name={'#icon-arrow-down'} />
            </div>
          </div>
          {sideDropDown === SideBarDropDown.GAME && <GameMenu />}
        </div>
        {/* Nav Item */}
        <Link to={SHOP_ROUTE} className={styles.navItem}>
          Магазин
        </Link>
        {/* Nav Item */}
        {/* <Link to={NEWS_ROUTE} className={styles.navItem}>
          Новости
        </Link> */}
        {/* Nav Item + dropDown */}
        <div
          className={classNames(styles.dropDown, styles.navItem)}
          onClick={() => {
            setSideDropDown(
              sideDropDown !== SideBarDropDown.ESPORT
                ? SideBarDropDown.ESPORT
                : SideBarDropDown.CLOSING
            );
          }}
        >
          <div className={styles.text}>
            Киберспорт
            <div className={styles.arrow}>
              <Icon name={'#icon-arrow-down'} />
            </div>
          </div>
          {sideDropDown === SideBarDropDown.ESPORT && <ESportMenu />}
        </div>
      </nav>
    </div>
  );
};

export default SideBarNavigation;
