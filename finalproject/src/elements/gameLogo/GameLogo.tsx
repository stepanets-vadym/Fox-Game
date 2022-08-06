// React
import { FC } from 'react';

// Styles
import styles from './GameLogo.module.scss';

// Types
interface Props {
  alt: string;
  logo?: string | undefined;
}

const GameLogo: FC<Props> = ({ alt, logo }) => {
  return (
    // GameCover
    <div className={styles.gameLogo}>
      <img src={logo} alt={alt} />
    </div>
  );
};

export default GameLogo;
