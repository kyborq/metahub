import { LoaderIcon } from "../../assets/icons";
import { classes } from "../../utils/classes.util";
import styles from "./Button.module.css";

type Props = {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

export const Button = ({ label, disabled, loading, onClick }: Props) => {
  return (
    <button
      className={classes(
        styles.Button,
        (disabled || loading) && styles.Disabled
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {!loading && label}
      {loading && <LoaderIcon width={32} fill="#4361ee" />}
    </button>
  );
};
