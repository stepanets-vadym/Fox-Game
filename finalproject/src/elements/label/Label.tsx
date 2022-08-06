import { FormikHandlers } from 'formik';
import { FC } from 'react';
import styles from './Label.module.scss';

interface Props {
  text?: string;
  type?: string;
  value?: string | number;
  name?: string;
  placeholder?: string;
  /** Change event handler */
  onChange?: FormikHandlers['handleChange'];
  /** Blur event handler */
  onBlur?: FormikHandlers['handleBlur'];
  errorMessage?: string | number;
  description?: string;
}


const Label:FC <Props> = ({ text, type, name, placeholder, onChange, onBlur, errorMessage, value, description}) => {
  return (
    <label className={styles.label}>
      <span className={styles.labelTitle}>{text}</span>
      <input
        className={styles.input}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className={styles.errorMessage}>
        {errorMessage}
      </div>
     {description ? <div className={styles.description}>
        {description}
      </div>: null}
    </label>
  );
};

export default Label;
