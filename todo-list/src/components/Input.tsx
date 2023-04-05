import styles from './Input.module.css';

type InputProps = {
  placeholder: string;
};

export function Input({ placeholder }: InputProps) {
  return (
    <input 
      className={styles.textInput} 
      type="text" 
      placeholder={placeholder} 
    />
  );
}
