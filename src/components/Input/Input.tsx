import { ChangeEventHandler, forwardRef, Ref } from "react";

import { classes } from "../../utils/classes.util";
import styles from "./Input.module.css";

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  name?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
};

export const Input = forwardRef(
  (
    { left, right, placeholder, name, value, className, onChange }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <label className={classes(styles.Field, className)}>
        {left}
        <input
          ref={ref}
          name={name}
          value={value}
          className={styles.Input}
          placeholder={placeholder}
          onChange={onChange}
          type="text"
        />
        {right}
      </label>
    );
  }
);
