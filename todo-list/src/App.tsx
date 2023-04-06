import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Task } from "./components/Task";
import { StatusBar } from "./components/StatusBar";
import { EmptyState } from "./components/EmptyState";

import "./global.css";
import styles from "./App.module.css";
import { useState } from "react";

export type TasksType = {
  id: number;
  text: string;
  isComplete: boolean;
};

const data: TasksType[] = [
  { id: 0, text: "Estudar React", isComplete: false },
  { id: 1, text: "Estudar Sistemas Operacionais", isComplete: true },
  { id: 2, text: "Comer petit gateau", isComplete: false },
].reverse();

export function App() {
  const [tasks, setTasks] = useState(data);

  function deleteTask(id: number) {
    const tasksWithoutDeleted = tasks.filter((task) => task.id !== id);
    setTasks(tasksWithoutDeleted);
  }

  function handleCheck(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <NewTask addNewTask={setTasks} tasks={tasks} />
        <div>
          <StatusBar tasks={tasks} />
          {tasks.length > 0 ? (
            <div className={styles.tasksArea}>
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    data={task}
                    onDelete={deleteTask}
                    onCheck={handleCheck}
                  />
                );
              })}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </main>
    </div>
  );
}
