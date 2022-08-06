// React
import { useContext } from 'react';
import { useShopingCart } from 'context/shopingCartContext';

// Components & elements
import Icon from 'elements/icon/Icon';

// Styles
import styles from './WindowCartItem.module.scss';

// Context
import { GameContext } from 'context/games';

// local Types
type Props = {
  id: string | number;
  quantity: string | number;
};

const WindowCartItem = ({ id, quantity }: Props) => {
  const { removeFromCart } = useShopingCart();

  const { Game, loading } = useContext(GameContext);

  const item = Game?.find((i) => i.id === id);
  if (item == null) return null;

  return (
    // WindowCartItem
    <div className={styles.WindowCartItem}>
      <div className={styles.gameInfo}>
        <div className={styles.info}>
          <div className={styles.img}>
            <img src={item.image.shopimage} alt={item.title} />
          </div>
          <h3 className={styles.gameTitle}>{item.title}</h3>
        </div>
        <div className={styles.gamePrise}>{item.price} Uah</div>
      </div>
      <button className={styles.remove} onClick={() => removeFromCart(item.id)}>
        <Icon name={'#icon-cross'} />
      </button>
    </div>
  );
};

export default WindowCartItem;
