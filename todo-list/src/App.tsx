import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Task } from "./components/Task";
import { StatusBar } from "./components/StatusBar";
import { EmptyState } from "./components/EmptyState";

import "./global.css";
import styles from "./App.module.css";

// TODO: cada task é um { id: number, text: string, isComplete: boolean }
const tasks = [
  'task 1', 
  'task 2',
  'task 3'
]

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <NewTask />
        <div>
          <StatusBar />
          {tasks.length > 0 ? (
            <div className={styles.tasksArea}>
              {tasks.map((task) => {
                return <Task />
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
