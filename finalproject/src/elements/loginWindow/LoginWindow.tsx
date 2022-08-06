// React
import classNames from 'classnames';
import { FC, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Components & elements

// Styles
import styles from './LoginWindow.module.scss';

// Interfacec
import {
  ADMIN_ROUTE,
  AUTHORIZATION_ROUTE,
  REGISTRATION_ROUTE,
} from 'utils/consts';
import Icon from 'elements/icon/Icon';
import { useAuth } from 'hooks/useAuth';

const LoginWindow = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  return (
    <div className={classNames(styles.logWindow)} onClick={(e) => e.stopPropagation()}>
      {auth.user ? (
        <div onClick={() => auth.signout(() => navigate('/'))} className={styles.logButton}>
          Вийти
        </div>
      ) : (
        <Link to={AUTHORIZATION_ROUTE} className={styles.logButton}>
          Увійти
        </Link>
      )}
      <div className={styles.line}></div>
      {auth.user ? (
        <Link to={ADMIN_ROUTE} className={styles.registration}>
          <div className={styles.icon}>
            <Icon name={'#icon-cogs'} />
          </div>
          <div> Адмін сторінка </div>
        </Link>
      ) : (
        <Link to={REGISTRATION_ROUTE} className={styles.registration}>
          <div className={styles.icon}>
            <Icon name={'#icon-user-plus'} />
          </div>
          <div> Створити обліковий запис</div>
        </Link>
      )}
    </div>
  );
};

export default LoginWindow;
