import { FormikHandlers } from 'formik';
import { FC } from 'react';
import styles from './TextArea.module.scss';

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
  errorMessage?: string ;
  description?: string;
}


const TextArea:FC <Props> = ({ text, type, name, placeholder, onChange, onBlur, errorMessage, value, description}) => {
  return (
    <label className={styles.label}>
      <span className={styles.labelTitle}>{text}</span>
      <textarea
        className={styles.textarea}
        value={value}
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

export default TextArea;