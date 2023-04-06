import styles from './StatusBar.module.css';

type StatusBarProps = {
  tasks: 
};

export function StatusBar() {
  return (
    <div className={styles.tasksStatus}>
      <div className={styles.createdTasks}>
        <strong>Tarefas criadas</strong>
        <p>5</p>
      </div>
      <div className={styles.finishedTasks}>
        <strong>Concluídas</strong>
        <p>2 de 5</p>
      </div>
    </div>
  );
}
