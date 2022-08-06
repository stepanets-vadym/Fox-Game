// React
import { Link } from 'react-router-dom';

// Components & elements
import Icon from 'elements/icon/Icon';

// Styles
import styles from './Logo.module.scss';


export const Logo= () => {
  return (
    <Link to='/' className={styles.logo} >
      <div className={styles.icon}>
        <Icon name={'#icon-fox'} />
      </div>
      <div className={styles.text}>Fox Games</div>
    </Link>
  );
};
