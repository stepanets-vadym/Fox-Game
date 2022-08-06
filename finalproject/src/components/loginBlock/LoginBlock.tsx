// React

// Components & elements
import Icon from 'elements/icon/Icon';
import { MenuContent } from 'interfaces/MenuContent.types';
import { FC } from 'react';

// Styles
import styles from './LoginBlock.module.scss';

// interfaces
interface Props {
  navMenu: string;
  setNavMenu: (navMenu: string) => void;
}

const LoginBlock: FC<Props> = ({ navMenu, setNavMenu }) => {
  return (
    // Navigation Block
    <div
      className={styles.loginBlock}
      onClick={() =>
        setNavMenu(
          navMenu !== MenuContent.LOGIN
            ? MenuContent.LOGIN
            : MenuContent.CLOSING
        )
      }
    >
      <div className={styles.login}>
        Мій обліковий запис
        <span className={styles.icon}>
          <Icon name='#icon-arrow-down' />
        </span>
      </div>
      <div className={styles.logicon}>
        <Icon name='#icon-user-plus' />
      </div>
    </div>
  );
};

export default LoginBlock;
