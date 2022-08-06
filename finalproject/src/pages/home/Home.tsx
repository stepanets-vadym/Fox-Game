// React

// Components & elements
import classNames from 'classnames';
import Slider from 'components/slider/Slider';
import { GameContext } from 'context/games';
import BannerBlock from 'elements/banner/BannerBlock';
import Loader from 'elements/loader/Loader';
import { useContext, useState } from 'react';
import { SHOP_ROUTE } from 'utils/consts';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Home.module.scss';

const BANERS = [
  {
    title: "Dragonflight Collector's Edition",
    logo: 'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt050e4f7b291ea3cb/621d0ff804503350d255bb5c/BLizzardGear-StoreLogo[2].png?format=webply&quality=80&auto=webp',
    description:
      'Можна придбати лише у магазині Blizzard Gear Store! Видання випущено обмеженим тиражем.',
    linktitle: `У магазин`,
    link: 'https://eu.gear.blizzard.com/collections/world-of-warcraft-collectibles?utm_source=Partner+&utm_medium=Blizzard&utm_campaign=Dragonflightcollectorsedition&utm_content=Blizzard.com',
    image:
      'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt1180943e6640e7c6/62bdd9e8c78cd56278f0b59b/45967-Blizzard-Gear-Store-Collector_s-Edition-WOW10-Blizzard-Battlenet-1600x640-2.jpg?format=webply&quality=80&auto=webp',
    smallImage:
      'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blteb7e1106d41b51bc/62bdd9e854eada112e74b8a1/45967-Blizzard-Gear-Store-Collector_s-Edition-WOW10-Blizzard-Battlenet-1200x640-2.jpg?format=webply&quality=80&auto=webp',
  },
  {
    title: 'Завантажте Battle.net',
    logo: 'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt29637bdb566e1a84/61f42abae47e3d2eff20faea/Logo.png?format=webply&quality=80&auto=webp',
    description: 'Усі ваші ігри Blizzard в одному місці.',
    linktitle: `Завантажити`,
    link: 'https://www.blizzard.com/ru-ru/download?product=bnetdesk',
    image:
      'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltb1b55d28d4835ac9/620171bfa6bb9250d3e44a63/Bnet_Card-06.6.jpg?format=webply&quality=80&auto=webp',
    smallImage:
      'https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt764c5b7fc6a4146b/620167e3f2c2644f956a8312/Mobile_Bnet_Card-02.2.jpg?format=webply&quality=80&auto=webp',
  },
];

const Home = () => {
  const { Game, loading } = useContext(GameContext);

  if (loading) {
    return <Loader />;
  } else {
    return (
      // CartBlock
      <div className={styles.home}>
        <div className={styles.slider}>
          <Slider />
        </div>
        <div className={classNames(styles.content, globalStyle.container)}>
          {BANERS.map((item) => (
            <BannerBlock banner={item} key={`banner - ${item.title}`} />
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
