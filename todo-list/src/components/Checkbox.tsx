import { useState } from 'react';
import styles from './Checkbox.module.css';

type CheckboxProps = {
  id: number;
  isChecked: boolean;
  onCheck: (id: number) => void;
};

export function Checkbox({ id, isChecked, onCheck }: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);

  function handleCheck() {
    setChecked(!checked);
    onCheck(id);
  }

  return (
    <div className={styles.container}>
      <input 
        id={id.toString()}
        name="task" 
        type="checkbox" 
        className={styles.checkBox}
        checked={checked} 
        readOnly
      />
      <span onClick={handleCheck} className={styles.checkMark}></span>
    </div>
  );
}
