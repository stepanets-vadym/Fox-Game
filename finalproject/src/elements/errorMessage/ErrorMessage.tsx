import { FC } from 'react';
// Styles
import Icon from 'elements/icon/Icon';
import styles from './ErrorMessage.module.scss';
import { MenuContent } from 'interfaces/MenuContent.types';
import { Errors } from 'interfaces/Errors.types';
import classNames from 'classnames';

// Interfaces
interface Props {
  error: Errors;
  setErrorMessage: (error:Errors)=>void
}

const ErrorMessage: FC<Props> = ({ error,setErrorMessage }) => {
  return(
    <div className={styles.errorrBlock}>
      <div className={styles.iconBlock}>
        <div className={classNames(styles.fox, styles.icon)}><Icon name={'#icon-fox-stay'}/></div>
        <div className={classNames(styles.fox, styles.icon, styles.midleFox)}><Icon name={'#icon-fox-shape'}/></div>
        <button className={classNames(styles.btn, styles.icon)} onClick={()=> setErrorMessage({...error, showMessage: false})} ><Icon name={'#icon-cross'}/></button>
      </div>
      <div className={styles.content}>
        {error.fisrtName !== '' ? <div className={styles.name}>
          Dear {error.fisrtName} {error.lastName}
        </div>: null}
        <div className={styles.message}>
          The problem is {error.message}
        </div>
      </div>
    </div>
    )  ;
};

export default ErrorMessage;
