import { FC } from 'react';
import classNames from 'classnames';

import { useWindowSize } from 'hooks/useWindowSize';

// Styles
import styles from './Footer.module.scss';
import globalStyle from '../../styles/global/global.module.scss';
import { Logo } from 'elements/logo/Logo';
import Icon from 'elements/icon/Icon';

// Interfaces

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <div className={styles.logoBlock}>
          <Logo />
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>ВАКАНСІЇ</li>
          <li className={styles.item}>ПРО КОМПАНІЮ</li>
          <li className={styles.item}>ПІДТРИМКА</li>
          <li className={styles.item}>ВІДКРИТИ ЗАПИТ</li>
          <li className={styles.item}>ПРЕС-РЕЛІЗИ</li>
          <li className={styles.item}>API</li>
        </ul>
        <div className={styles.loader}>
          Всі ігри в одному додатку:
          <a
            href='https://www.blizzard.com/ru-ru/apps/battle.net/desktop'
            target='_blank'
          >
            <Icon name={'#icon-battle-net'} /> Додаток Battle.net
          </a>
        </div>
        <div className={styles.license}>
          <span>© BLIZZARD ENTERTAINMENT, INC., 2022</span>
          <span> Всі ці товарні знаки є власністю відповідних власників.</span>
        </div>
        <ul className={styles.licenseList}>
          <li className={styles.licenseItem}>Політика конфіденційності</li>
          <li className={styles.licenseItem}>Угода</li>
          <li className={styles.licenseItem}>Умови</li>
          <li className={styles.licenseItem}>Політика cookie</li>
          <li className={styles.licenseItem}>Параметри cookie</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
