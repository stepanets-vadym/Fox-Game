import { Ggame } from './Game.types';
export interface GameContextTypes {
  // це змінна у яку запишемо відповідь з бекенду про юзера
  Game: Ggame[] ;
  loading: boolean;
  setGame: (value: React.SetStateAction<Ggame[]>) => void;
}
