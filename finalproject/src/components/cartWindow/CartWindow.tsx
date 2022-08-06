// React
import { FC } from 'react';
// elements & components
import WindowCartItem from 'elements/windowCartItem/WindowCartItem';
import Icon from 'elements/icon/Icon';

// context
import { useShopingCart } from 'context/shopingCartContext';

// Styles
import styles from './CartWindow.module.scss';

// Types & interfaces
import { MenuContent } from 'interfaces/MenuContent.types';
interface Props {
  navMenu: string;
  setNavMenu: (navMenu: string) => void;
}

const CartWindow: FC<Props> = ({ navMenu, setNavMenu }) => {
  const { cartItems } = useShopingCart();
  return (
    // CartWindow
    <div className={styles.CartWindow} onClick={(e) => e.stopPropagation()}>
      <div className={styles.wrapper}>
        <div className={styles.cartHeader}>
          <h2 className={styles.title}>Товари в корзині</h2>
          <div
            className={styles.cross}
            onClick={() => {
              setNavMenu(
                navMenu !== MenuContent.CART
                  ? MenuContent.CART
                  : MenuContent.CLOSING
              );
            }}
          >
            <Icon name={'#icon-cross'} />
          </div>
        </div>
        <hr />
        <div className={styles.body}>
          {cartItems.map((item) => (
            <WindowCartItem key={`cartItem - ${item.id}`} {...item} />
          ))}
        </div>
        {/* {cartItems.length !== 0 && <hr></hr>}
        <div className={styles.linkBlock}>
          <Link className={styles.link} to={CART_ROUTE}>
            Пререйти до корзини
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default CartWindow;
