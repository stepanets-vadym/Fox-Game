// React
import classNames from 'classnames';
import GameCover from 'components/gameCover/GameCover';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

// Components & elements
import GameLogo from 'elements/gameLogo/GameLogo';

// Interfaces
import GameGenre from 'components/gameGenre/GameGenre';
import { Category, Game, Ggame } from 'interfaces/Game.types';
import { GAME_ROUTE } from 'utils/consts';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './GameItem.module.scss';
import { useShopingCart } from 'context/shopingCartContext';

// Types
interface Props {
  game: Ggame;
}

const GameItem: FC<Props> = ({ game }) => {
  const router = useNavigate();
  const {getItemQuantity, increaseCartQuantity, deecreaseCartQuantity, removeFromCart} = useShopingCart()

  const quantity = getItemQuantity(game.id);

  return (
    // Game Item
    <div className={styles.gameItem}>
      <div onClick={() => router(`${GAME_ROUTE}/${game.id}`)}>
        {/*  Game Item  Image*/}
        <div className={styles.image}>
          <GameCover image={game.image.shopimage} alt={game.title} />
          <div className={styles.logo}>
            <GameLogo logo={game.logo.grandLogo} alt={game.title} />
          </div>
        </div>
        {/* Detail Block */}
        <div className={styles.details}>
          {/* Game Name */}
          <h2 className={styles.title}>{game.title}</h2>
          {/* Game Genre */}
          <div className={styles.genre}>
            {game.category?.map((genre: Category) => (
              <GameGenre genre={genre} key={`genre - ${genre.id}`} />
            ))}
          </div>
          <div className={styles.description}>{game.genres}</div>
          {/* Buy Button */}
        </div>
      </div>
      <div className={styles.gameBuy}>
        <span className={styles.price}>{game.price} uah</span>
        {quantity === 0 ? (
          <button type='button' onClick={()=> increaseCartQuantity(game.id)} className={styles.buybtn}>
            в корзину
          </button>
        ) : (
          <button type='button' onClick={()=> removeFromCart(game.id)}  className={styles.remuvebtn}>
            видалити
          </button>
        )}
      </div>
    </div>
  );
};

export default GameItem;
