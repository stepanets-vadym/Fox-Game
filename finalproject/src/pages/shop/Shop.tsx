// React
import classNames from 'classnames';
import { useContext, useEffect, useMemo, useState } from 'react';

// Context
import { GameContext } from 'context/games';

// Components & elements
import GameItem from 'components/gameItem/GameItem';
import Loader from 'elements/loader/Loader';
import MyButton from 'elements/button/MyButton';

// Styles
import styles from './Shop.module.scss';
import globalStyle from '../../styles/global/global.module.scss';
import { ButtonTypes } from 'interfaces/Button.types';
import MySelect from 'elements/select/MySelect';

const FilterTypes = {
  CHEAP: 'cheap',
  EXPENSIVE: 'expensive',
  MISSING: 'missing',
};

const Shop = () => {
  // State
  const { Game, loading, setGame } = useContext(GameContext);

  const [filterCheck, setFilterCheck] = useState<string>(FilterTypes.MISSING);
  // console.log(filterCheck);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const [selectedSort, setSelectedSort] = useState<string>('');

  const sortGames = useMemo(() => {
    return selectedSort
      ? [...Game].filter((game) =>
          game.category?.find((genre) => genre.title === selectedSort)
        )
      : Game;
  }, [selectedSort, Game]);

  const sortedAndSearchedGames = useMemo(() => {
    return sortGames.filter((game) =>
      game.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortGames]);

  const FilterGames = (filter: string) => {
    setSelectedSort(filter);
  };

  const sortToExpensive = () => {
    setGame([...Game].sort((a, b) => a.price - b.price));
    setFilterCheck(FilterTypes.EXPENSIVE);
  };
  const sortToCheap = () => {
    setGame([...Game].sort((a, b) => b.price - a.price));
    setFilterCheck(FilterTypes.CHEAP);
  };


  return (
    // Shop
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={classNames(styles.shop)}>
          <div
            className={classNames(
              globalStyle.container,
              globalStyle.upperIndent
            )}
          >
            {/* пошук за назвою */}
            <div className={styles.find}>
              <input
                placeholder='Пошук...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className={styles.filter}>
              {/* кнопка сортування  */}
              <MyButton
                type='button'
                title={'від дешевих до дорожчих'}
                onClick={() =>
                  sortToExpensive()
                  
                }
                mode={
                  filterCheck === FilterTypes.EXPENSIVE
                    ? ButtonTypes.SORT
                    : null
                }
              />
              {/* кнопка сортування  */}

              <MyButton
                type='button'
                title={'від дорожчих до дешевих'}
                onClick={() =>
                  sortToCheap()
                  
                }
                mode={
                  filterCheck === FilterTypes.CHEAP ? ButtonTypes.SORT : null
                }
              />
              {/* фільрація за категоріями */}
              <MySelect
                value={selectedSort}
                onChange={FilterGames}
                defaultValue='Сортування за'
                options={[
                  {
                    value: '',
                    name: 'Усі ігри',
                  },
                  {
                    value: '#icon-battle-net',
                    name: 'Ігри блізард',
                  },
                  {
                    value: '#icon-playstation',
                    name: 'Ігри для Рlaystation',
                  },
                  {
                    value: '#icon-xbox',
                    name: 'Ігри для Хbox',
                  },
                  {
                    value: '#icon-computer',
                    name: 'Ігри для РС',
                  },
                ]}
              />
            </div>
            <div className={styles.gamesBlock}>
              {sortedAndSearchedGames?.map((game) => (
                <GameItem game={game} key={game.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Shop;
