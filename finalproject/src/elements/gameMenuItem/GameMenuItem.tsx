// React
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { FC } from 'react';

// Components & elements
import GameCover from 'components/gameCover/GameCover';

// Styles
import styles from './GameMenuItem.module.scss';

import { Ggame } from 'interfaces/Game.types';
import { GAME_ROUTE } from 'utils/consts';
interface Props {
  game: Ggame;
}

const GameMenuItem: FC<Props> = ({ game }) => {
  const router = useNavigate();

  
  
  return (
    // Navigation Block
    <div
      onClick={() => router(`${GAME_ROUTE}/${game.id}`)}
      className={classNames(
        styles.gameMenuItem,
        ' animate__animated animate__backInLeft'
      )}
    >
      <div className={styles.image}>
        <GameCover image={game.logo.smallLogo} alt={game.title} />
      </div>
      <div className={styles.title}>{game.title}</div>
    </div>
  );
};

export default GameMenuItem;
