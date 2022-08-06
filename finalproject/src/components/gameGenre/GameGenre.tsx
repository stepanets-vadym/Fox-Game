// React
import Icon from 'elements/icon/Icon';
import { Category, Ggame } from 'interfaces/Game.types';
import { FC } from 'react';

// Components & elements

// Styles
import styles from './GameGenre.module.scss';

// Types
interface Props {
  genre: Category;
}

const GameGenre: FC<Props> = ({ genre }) => {
  return (
    // Game Genre Block
    <div className={styles.genre}><Icon name={genre.title} /></div>
  );
};

export default GameGenre;
