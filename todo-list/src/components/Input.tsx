import { ChangeEvent } from 'react';

import styles from './Input.module.css';

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ placeholder, value, onChange }: InputProps) {
  return (
    <input 
      className={styles.textInput} 
      type="text" 
      placeholder={placeholder} 
      value={value}
      onChange={onChange} 
    />
  );
}
