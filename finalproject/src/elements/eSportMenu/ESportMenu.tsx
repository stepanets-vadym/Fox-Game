// React
import classNames from 'classnames';
import { FC, useContext } from 'react';

// Components & elements


// Interfaces
import { NewsMenu } from 'interfaces/NewsMenu.types';

// Context

// Styles
import styles from './ESportMenu.module.scss';
import globalStyle from '../../styles/global/global.module.scss';
import ESportMenuItem from 'elements/eSportMenuItem/ESportMenuItem';

// games array 
const GAMES: Array<NewsMenu> = [
  {
    image: `https://blznav.akamaized.net/img/esports/esports-overwatch-36d8f7f486d363c1.png`,
    title: 'Overwatch League',
    id: 8,
    link: 'https://overwatchleague.com/en-us'
  },
  {
    image: `https://blznav.akamaized.net/img/esports/esports-overwatch-world-cup-43d00c39399a70b8.png`,
    title: 'Чемпионат мира по Overwatch',
    id: 9,
    link: 'https://overwatchleague.com/en-us/overwatch-world-cup'
  },
  {
    image: `https://blznav.akamaized.net/img/esports/esports-hsm-5b1ed3fe5cf5d4f8.png`,
    title: 'Hearthstone Masters',
    id: 10,
    link: 'https://playhearthstone.com/ru-ru/esports/'
  },
  {
    image: `https://blznav.akamaized.net/img/esports/esports-sc2-32be849895ec4e7d.png`,
    title: 'StarCraft II WCS',
    id: 11,
    link: 'https://pro.eslgaming.com/tour/sc2/'
  },

  {
    image: `https://blznav.akamaized.net/img/esports/esports-wowwc-79e9589cf9355f17.png`,
    title: 'World of Warcraft Arena World Championship',
    id: 12,
    link: 'https://worldofwarcraft.com/ru-ru/esports/arena'
  },
];


const ESportMenu = () => {
  
  
  return (
    <div className={classNames(styles.eSportMenu ,'animate__animated animate__backInLeft')} >
      {GAMES.map((game: NewsMenu) => (
              // Game block
              <ESportMenuItem game={game} key={`GameItem key - ${game.id}`} />
            ))}
    </div>
  );
};

export default ESportMenu;
