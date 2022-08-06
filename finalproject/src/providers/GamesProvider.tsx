import { apiClient } from 'API/GameServis';
import { GameContext } from 'context/games';
import { Ggame } from 'interfaces/Game.types';
import { useEffect, useState } from 'react';

export function GamesProvider({ children }: { children: React.ReactNode }) {
  let games: Ggame[] = [];

  const [game, setGame] = useState<Ggame[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  const getGames = (): Promise<Ggame[]> => {
    return new Promise((resolve, reject) => {
      if (games?.length) {
        resolve(games);
      } else {
        apiClient.get<Ggame[]>('/games/getAll').then((response) => {
          if (response) {
            games = response.data;
            resolve(games);
          }
        });
      }
    });
  };

  const getAllGames =  async() => {
    setLoading(true)
    await getGames().then((response) => setGame(response));
    setLoading(false)

  };
  
  useEffect(() => {
    getAllGames()
  }, []);

  return <GameContext.Provider value={{Game:game, loading, setGame}}>{children}</GameContext.Provider>;
}
