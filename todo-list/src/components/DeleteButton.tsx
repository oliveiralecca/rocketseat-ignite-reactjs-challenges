import { Trash } from "phosphor-react";

import styles from "./DeleteButton.module.css";

type DeleteButtonProps = {};

export function DeleteButton() {
  return (
    <button className={styles.deleteButton} title="Excluir tarefa">
      <Trash size={18} />
    </button>
  );
}
