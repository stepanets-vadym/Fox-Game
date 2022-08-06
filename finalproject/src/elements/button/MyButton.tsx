// React
import classNames from 'classnames';

// Context

// Components & elements

// Styles
import styles from './MyButton.module.scss';
import globalStyle from '../../styles/global/global.module.scss';

// Interfaces
import { ButtonTypes } from 'interfaces/Button.types';
import { FC } from 'react';
interface Props {
  title: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  mode?: ButtonTypes | null;
  onClick: () => void;
}

const MyButton: FC<Props> = ({ title, type, mode = ButtonTypes.STANDART, onClick }) => {
  let buttonClass;
  switch (mode) {
    case ButtonTypes.SORT:
      buttonClass = styles.sortButton;
      break;

      default: {
        buttonClass = styles.button;
      }
  }
  return (
    <button type={type} className={classNames(styles.button, buttonClass)} onClick={onClick} >
      <span>{title}</span>
    </button>
  );
};

export default MyButton;
