import { FC } from 'react';
// Styles
import Icon from 'elements/icon/Icon';
import styles from './Burger.module.scss';
import { MenuContent } from 'interfaces/MenuContent.types';

// Interfaces
interface Props {
  sideBarMenu: boolean;
  setSideBarMenu: (sideBarMenu: boolean) => void;
  navMenu: string;
  setNavMenu: (navMenu: string) => void;
}

const Burger: FC<Props> = ({
  sideBarMenu,
  setSideBarMenu,
  navMenu,
  setNavMenu,
}) => {
  return (
    <div
      className={styles.burger}
      onClick={() =>
        setNavMenu(
          navMenu !== MenuContent.SIDEBAR
            ? MenuContent.SIDEBAR
            : MenuContent.CLOSING
        )
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.icon}>
         { navMenu === MenuContent.SIDEBAR ? <Icon name={'#icon-cross'}/> : <Icon name={'#icon-menu'}/>}
        </div>
        <div className={styles.text}>Menu</div>
      </div>
    </div>
  );
};

export default Burger;
