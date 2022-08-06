import { Category } from "interfaces/Game.types";
import { FC } from "react";

interface Props{
  name: string ;
} 

const Icon: FC<Props> = ({ name }) => {
  return (
    <svg className='icon'>
      <use xlinkHref={name}></use>
    </svg>
  );
};

export default Icon;
