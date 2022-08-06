import classNames from 'classnames';



import Icon from 'elements/icon/Icon';

// Styles
import styles from './Loader.module.scss';
import globalStyle from '../../styles/global/global.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={classNames(styles.wrapper, globalStyle.conatiner)}>
        <div className={styles.magicBlock}>
          <div className={styles.sun}>
            <Icon name={'#icon-sun'} />
          </div>
          <div className={styles.fox}>
            <Icon name={'#icon-fox-stay'} />
            <div className={styles.cloud}>
              <Icon name={'#icon-cloud'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
