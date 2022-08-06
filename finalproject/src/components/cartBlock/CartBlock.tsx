// React
import classNames from 'classnames';
import { FC } from 'react';

// Components & elements
import Icon from 'elements/icon/Icon';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './CartBlock.module.scss';



const CartBlock = () => {

  
  return (
    // CartBlock
    <div className={styles.cartBlock}>
      {/* Icon */}
      <div className={styles.icon}>
        <Icon name={'#icon-money-bag'}/>
      </div>
      {/* Total Price */}
      <div className={styles.totalPrice}>
        
      </div>
    </div>
  );
};

export default CartBlock;
