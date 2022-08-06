// React
import classNames from 'classnames';
import { useContext} from 'react';

// Components & elements

import GameMenuItem from 'elements/gameMenuItem/GameMenuItem';

// Context
import { Ggame } from 'interfaces/Game.types';
import { GameContext } from 'context/games';

// Styles
import styles from './GameMenu.module.scss';
import globalStyle from '../../styles/global/global.module.scss';

const GameMenu = () => {
  const { Game, loading } = useContext(GameContext);

  return (
    <>
      <div className={classNames(styles.gamesBlock, globalStyle.container)}>
        {Game?.map((game: Ggame) =>
          // Game block
          game.logo.smallLogo ? (
            <GameMenuItem game={game} key={`GameItem key - ${game.id}`} />
          ) : null
        )}
      </div>
    </>
  );
};

export default GameMenu;
