// React
import classNames from 'classnames';
import { FC } from 'react';

// Components & elements

// Styles
import styles from './Navigation.module.scss';

interface Props {
  active: boolean,
  setActive: (active: boolean) => void,
  name: string,
  image: string,
  
}

const Modal: FC<Props> = ({ active, setActive, name, image }) => {
  let modalClass = active
    ? classNames(styles.modal, styles.active)
    : styles.modal;

  return (
    <div
      className={`${modalClass}`}
      onClick={() => {
        setActive(false);
      }}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.image}>{image}</div>
        <div className={styles.title}>{name}</div>
      </div>
    </div>
  );
};

export default Modal;