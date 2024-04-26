import { LoaderIcon } from "../../assets/icons";
import { classes } from "../../utils/classes.util";
import styles from "./Button.module.css";

type Props = {
  label: string;
  disabled?: boolean;
  loading?: boolean;
};

export const Button = ({ label, disabled, loading }: Props) => {
  return (
    <button
      className={classes(
        styles.Button,
        (disabled || loading) && styles.Disabled
      )}
      disabled={disabled}
    >
      {!loading && label}
      {loading && <LoaderIcon width={32} fill="#4361ee" />}
    </button>
  );
};
