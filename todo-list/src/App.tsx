import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <div>
          Tasks area
        </div>
      </main>    
    </div> 
  )
}
