import { Checkbox } from "./Checkbox";
import { DeleteButton } from "./DeleteButton";

import { TasksType } from "../App";

import styles from "./Task.module.css";

type TaskProps = {
  data: TasksType;
  onDelete: (id: number) => void;
  onCheck: (id: number) => void;
};

export function Task({ data, onDelete, onCheck }: TaskProps) {
  return (
    <div className={styles.taskContainer} aria-disabled={data.isComplete}>
      <div className={styles.infoArea}>
        <Checkbox 
          id={data.id} 
          isChecked={data.isComplete} 
          onCheck={onCheck}
        />
        <span>
          {data.text}
        </span>
      </div>
      <DeleteButton taskId={data.id} onDelete={onDelete} />
    </div>
  );
}
