import { useState } from 'react';
import styles from './Checkbox.module.css';

type CheckboxProps = {};

// TODO: id = vem dos dados da task | checked = vem dos dados da task
// TODO: O onClick vai no span mudando o state de checked

export function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.container}>
      <input 
        id="1"
        name="task" 
        type="checkbox" 
        className={styles.checkBox}
        checked={checked} 
      />
      <span className={styles.checkMark}></span>
    </div>
  );
}
