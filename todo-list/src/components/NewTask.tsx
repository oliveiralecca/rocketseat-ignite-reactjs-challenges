import { ChangeEvent, FormEvent, useState } from "react";

import { CreateButton } from "./CreateButton";
import { Input } from "./Input";

import { TasksType } from "../App";

import styles from "./NewTask.module.css";

type NewTaskProps = {
  tasks: TasksType[];
  addNewTask: React.Dispatch<React.SetStateAction<TasksType[]>>;
};

export function NewTask({ tasks, addNewTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState("");

  function generateNewId(id?: number) {
    if (id || id === 0) return id + 1;
    return 0;
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    addNewTask((prev) => [
      { id: generateNewId(prev[0]?.id), text: newTask, isComplete: false },
      ...tasks,
    ]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  const hasNoText = newTask.length === 0;

  return (
    <form onSubmit={handleAddNewTask} className={styles.newTaskContainer}>
      <Input
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        value={newTask}
      />
      <CreateButton disabled={hasNoText} />
    </form>
  );
}
