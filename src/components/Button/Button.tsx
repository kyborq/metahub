import { LoaderIcon } from "../../assets/icons";
import { classes } from "../../utils/classes.util";
import styles from "./Button.module.css";

type Props = {
  icon?: React.ReactNode;
  label: string;
  disabled?: boolean;
  loading?: boolean;
  compact?: boolean;
  onClick?: () => void;
};

export const Button = ({
  label,
  disabled,
  loading,
  compact,
  icon,
  onClick,
}: Props) => {
  return (
    <button
      className={classes(
        styles.Button,
        (disabled || loading) && styles.Disabled,
        compact && styles.Compact
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {!loading && icon}
      {!loading && <span className={styles.Label}>{label}</span>}
      {loading && <LoaderIcon width={32} fill="#4361ee" />}
    </button>
  );
};
