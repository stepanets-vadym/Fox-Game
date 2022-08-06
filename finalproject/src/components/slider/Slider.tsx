// React
import { FC, useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components & elements
import Slide from 'elements/slide/Slide';
import Icon from 'elements/icon/Icon';

// Styles
import styles from './Slider.module.scss';
import globalStyle from '../../styles/global/global.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

// Interfases
import { Ggame } from 'interfaces/Game.types';
import { GameContext } from 'context/games';

const Slider = () => {
  const { Game, loading } = useContext(GameContext);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className={classNames(styles.slider, globalStyle.upperIndent)}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        spaceBetween={20}
        // slidesPerView={'auto'}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper: any) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        effect={'coverflow'}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
      >
        {/* Loading games in their block on Home Page*/}
        {Game?.map((game: Ggame) =>
          // Game block
          game.image.sliderGrandImage ? (
            <SwiperSlide key={`slide: ${game.id}`}>
              <Slide game={game} />
            </SwiperSlide>
          ) : null
        )}
        <button
          type='button'
          className={classNames(styles.rightArrow, styles.arrow)}
          ref={navigationPrevRef}
        >
          <Icon name={'#icon-arrow'} />
        </button>
        <button
          type='button'
          className={classNames(styles.leftArrow, styles.arrow)}
          ref={navigationNextRef}
        >
          <Icon name={'#icon-arrow'} />
        </button>
      </Swiper>
    </div>
  );
};

export default Slider;
