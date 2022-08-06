// React
import { FC } from 'react';

// Styles
import styles from './GameCover.module.scss';

// Types
interface Props {
  image: string;
  alt: string;

}

const GameCover: FC<Props> = ({ image = '', alt }) => {
  return (
    // GameCover
    <div className={styles.gameCover}>
      <img src={image} alt={alt} />
      
    </div>
  );
};

export default GameCover;
