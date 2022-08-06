import classNames from 'classnames';
import { FC } from 'react';

// Components & elements
import Icon from 'elements/icon/Icon';

// Styles
import styles from './NavCart.module.scss';

// Interfacec
import { useShopingCart } from 'context/shopingCartContext';
import { MenuContent } from 'interfaces/MenuContent.types';
interface Props {
  navMenu: string;
  setNavMenu: (navMenu: string) => void;
}

const NavCart: FC<Props> = ({ navMenu, setNavMenu }) => {
  const { cartQuantity } = useShopingCart();
  return (
    <div
      className={classNames(styles.NavCart)}
      onClick={() =>
        setNavMenu(
          navMenu !== MenuContent.CART ? MenuContent.CART : MenuContent.CLOSING
        )
      }
    >
      {cartQuantity !== 0 ? (
        <div className={styles.itemsInCart}>{cartQuantity}</div>
      ) : null}
      <div className={styles.cartIcon}>
        <Icon name={'#icon-cart'} />
      </div>
    </div>
  );
};

export default NavCart;
