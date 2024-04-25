import { classes } from "../../utils/classes.util";
import styles from "./Button.module.css";

type Props = {
  label: string;
  disabled?: boolean;
};

export const Button = ({ label, disabled }: Props) => {
  return (
    <button
      className={classes(styles.Button, disabled && styles.Disabled)}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
