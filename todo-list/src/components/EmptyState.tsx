import clipboard from '../assets/clipboard-icon.svg';

import styles from './EmptyState.module.css';

type EmptyStateProps = {};

export function EmptyState() {
  return (
    <div className={styles.emptyContainer}>
      <img src={clipboard} alt="Empty state icon" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
