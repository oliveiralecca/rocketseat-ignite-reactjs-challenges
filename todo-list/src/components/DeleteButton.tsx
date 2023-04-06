import { Trash } from "phosphor-react";

import styles from "./DeleteButton.module.css";

type DeleteButtonProps = {
  taskId: number;
  onDelete: (id: number) => void;
};

export function DeleteButton({ taskId, onDelete }: DeleteButtonProps) {
  function handleDeleteTask() {
    onDelete(taskId);
  }
  return (
    <button 
      className={styles.deleteButton} 
      title="Excluir tarefa"
      onClick={handleDeleteTask}
    >
      <Trash size={18} />
    </button>
  );
}
