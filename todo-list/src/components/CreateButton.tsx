import { PlusCircle } from "phosphor-react";

import styles from "./CreateButton.module.css";

type CreateButtonProps = {
  disabled: boolean;
};

export function CreateButton({ disabled }: CreateButtonProps) {
  return (
    <button className={styles.createButton} disabled={disabled}>
      Criar
      <PlusCircle size={20} />
    </button>
  );
}
