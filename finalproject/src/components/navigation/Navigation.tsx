// React
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FC, useEffect } from 'react';

// Components & elements
import Icon from 'elements/icon/Icon';

// Styles
import styles from './Navigation.module.scss';
import { MenuContent } from 'interfaces/MenuContent.types';

// Context

// Interfaces
interface Props {
  navMenu: string;
  setNavMenu: (navMenu: string) => void;
}

const Navigation: FC<Props> = ({ navMenu, setNavMenu }) => {


  return (
    <nav className={styles.navigation}>
      {/* Nav Item + dropDown */}
      <div
        className={classNames(styles.dropDown, styles.navItem)}
        onClick={()=>setNavMenu( navMenu !== MenuContent.GAME ? MenuContent.GAME : MenuContent.CLOSING)}
      >
        Ігри
        <span className={styles.arrow}>
          <Icon name={'#icon-arrow-down'} />
        </span>
      </div>
      {/* Nav Item */}
      <Link
        to='/shop'
        className={styles.navItem}
      >
        Магазин
      </Link>
      {/* Nav Item */}
      {/* <Link
        to='/news'
        className={styles.navItem}
      >
        Новости
      </Link> */}
      {/* Nav Item + dropDown */}
      <div
        className={classNames(styles.dropDown, styles.navItem)}
        onClick={() => {
          setNavMenu(
            navMenu !== MenuContent.ESPORT ? MenuContent.ESPORT : MenuContent.CLOSING
          );
        }}
      >
        Кіберспорт
        <span className={styles.arrow}>
          <Icon name={'#icon-arrow-down'} />
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
