import { CreateButton } from "./CreateButton";
import { Input } from "./Input";

import styles from "./NewTask.module.css";

type componentsProps = {};

export function NewTask() {
  return (
    <div className={styles.newTaskContainer}>
      <Input placeholder="Adicione uma nova tarefa" />
      <CreateButton disabled={false} />
    </div>
  );
}
