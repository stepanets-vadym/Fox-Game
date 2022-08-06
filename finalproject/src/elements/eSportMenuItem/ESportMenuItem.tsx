// React
import { FC } from 'react';

// Context

// Styles
import styles from './ESportMenuItem.module.scss';

import { NewsMenu } from 'interfaces/NewsMenu.types';
interface Props {
  game: NewsMenu;
}

const ESportMenuItem: FC<Props> = ({ game }) => {
  
  return (
    <a href={game.link} target={'_blank'} className={styles.eSportItem}>
      <div className={styles.image}>
        <img src={game.image} alt={game.title} />
      </div>
      <div className={styles.title}>
        {game.title}
      </div>
    </a>
  );
};

export default ESportMenuItem;
