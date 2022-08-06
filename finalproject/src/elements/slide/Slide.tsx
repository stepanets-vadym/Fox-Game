// React
import { Link, useNavigate } from 'react-router-dom';
import { FC } from 'react';

// Components & elements
import classNames from 'classnames';

// Styles
import styles from './Slide.module.scss';
import globalStyle from '../../styles/global/global.module.scss';

// interfaces
import { Ggame } from 'interfaces/Game.types';
import { GAME_ROUTE } from 'utils/consts';
import { useWindowSize } from 'hooks/useWindowSize';

interface Props {
  game: Ggame;
}

const Slide: FC<Props> = ({ game }) => {
  const router = useNavigate();

  const size = useWindowSize();
  // Sliders slide

  return (
    // Slide
    <div
      onClick={() => router(`${GAME_ROUTE}/${game.id}`)}
      className={styles.slide}
    >
      {/* All slide it link on gamePage */}
      <div className={classNames(styles.block)}>
        {/* background image */}
        <div
          className={styles.background}
          style={{
            backgroundImage:
              size.width > 1024
                ? `url(${game.image.sliderGrandImage})`
                : `url(${game.image.sliderSmallImage})`,
          }}
        />
        {/* content block */}
        <div className={styles.content}>
          <div className={styles.contentBlock}>
            {/* Logo */}
            <div className={styles.logo}>
              <img src={game.logo.grandLogo} alt={game.title} />
            </div>
            {/* Title */}
            <h2 className={styles.title}>{game.title}</h2>
            {/* Subtitle */}
            {game.description ? (
              <h3 className={styles.subtitle}>
                {game.description.sliderDescription}
              </h3>
            ) : null}
          </div>
          {/* Link to Youtube video */}
          <a href={game.videoLink} target={'_blank'} className={styles.button}>
            Переглянути ролик
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide;
