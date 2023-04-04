import styles from './TextInput.module.css';

type TextInputProps = {
  placeholder: string;
};

export function TextInput({ placeholder }: TextInputProps) {
  return (
    <input 
      className={styles.textInput} 
      type="text" 
      placeholder={placeholder} 
    />
  );
}
