import { useState } from "react";

import { TasksType } from "../App";

import styles from "./StatusBar.module.css";

type StatusBarProps = {
  tasks: TasksType[];
};

export function StatusBar({ tasks }: StatusBarProps) {
  const total = tasks.length;
  const completed = tasks.reduce((acc, task) => {
    if (task.isComplete === true) {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <div className={styles.tasksStatus}>
      <div className={styles.createdTasks}>
        <strong>Tarefas criadas</strong>
        <p>{total}</p>
      </div>
      <div className={styles.finishedTasks}>
        <strong>Concluídas</strong>
        {total > 0 ? <p>{`${completed} de ${total}`}</p> : <p>{total}</p>}
      </div>
    </div>
  );
}
