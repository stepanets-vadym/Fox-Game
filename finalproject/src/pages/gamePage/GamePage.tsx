// React
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components & elements

// Interfaces
import { Ggame } from 'interfaces/Game.types';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './GamePage.module.scss';
import { apiClient } from 'API/GameServis';
import Loader from 'elements/loader/Loader';

const GamePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [game, setGame] = useState<Ggame>();

  const params = useParams();
  const gameById = async (id: string | undefined) => {
    setLoading(true);
    const response = await apiClient.get<Ggame>(`/games/${id}`);
    setGame(response.data);
    setLoading(false);
  };

  useEffect(() => {
    gameById(params.id);
  }, []);


  if (loading) {
    return <Loader />;
  } else {
    return (
      // GamePage
      <div className={styles.GamePage}>
        <div className={classNames(styles.wrapper, globalStyle.container)}>
          <div className={styles.banner}>
            <img
              className={styles.image}
              src={game?.image.gamePageImage}
              alt={game?.title}
            />
            <img
              className={styles.logo}
              src={game?.logo.grandLogo}
              alt={game?.title}
            />
          </div>
          <h2 className={styles.title}>{game?.title}</h2>
          <div className={styles.content}>
            <div>
              <iframe
                className={styles.iframe}
                src={game?.iframeVideo}
                title={game?.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              ></iframe>
            </div>
            <div className={styles.description}>
              {game?.description?.gamePageDescription}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default GamePage;
