// React
import { FC } from 'react';
import classNames from 'classnames';

// Context

// Components & elements

// Styles
import styles from './MySelect.module.scss';
import globalStyle from '../../styles/global/global.module.scss';

// Interfaces
import { ButtonTypes } from 'interfaces/Button.types';

interface Opntions {
  name: string;
  value: string;
}

interface Props {
  defaultValue: string;
  options: Opntions[];
  value: string;
  onChange: (event: string) => void;
}

const MySelect: FC<Props> = ({ defaultValue, options, value, onChange }) => {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
      <option disabled value=''>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.name} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
