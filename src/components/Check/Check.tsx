import styles from "./Check.module.css";

type Props = {
  label: string;
  isChecked?: boolean;
  onChange?: () => void;
};

export const Check = ({ label, isChecked, onChange }: Props) => {
  return (
    <label className={styles.CheckBox}>
      <input
        type="checkbox"
        checked={isChecked}
        className={styles.Input}
        onChange={onChange}
        hidden
      />
      <div className={styles.CustomCheckmark}></div>
      <span className={styles.Label}>{label}</span>
    </label>
  );
};
