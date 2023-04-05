import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";
import { NewTask } from "./components/NewTask";

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <NewTask />
        <div>Tasks area</div>
      </main>
    </div>
  );
}
