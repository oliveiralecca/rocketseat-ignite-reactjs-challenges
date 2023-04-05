import { Checkbox } from './Checkbox';
import { DeleteButton } from './DeleteButton';
import styles from './Task.module.css';

type TaskProps = {};

// TODO: aria-disabled -> depende do estado de check

export function Task() {
  return (
    <div className={styles.taskContainer} aria-disabled={false}>
      <div className={styles.infoArea}>
        <Checkbox />
        <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Auctor neque turpis turpis semper.</span>
      </div>
      <DeleteButton />
    </div>
  );
}
