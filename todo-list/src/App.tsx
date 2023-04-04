import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';
import { TextInput } from './components/TextInput';

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <TextInput placeholder="Adicione uma nova tarefa" />
        <div>
          Tasks area
        </div>
      </main>    
    </div> 
  )
}
