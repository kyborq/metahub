import styles from "./Form.module.css";

type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  onSubmit?: () => void;
};

export const Form = ({ title, description, children, onSubmit }: Props) => {
  return (
    <form
      className={styles.Form}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit();
      }}
    >
      <div className={styles.Header}>
        <h3 className={styles.Title}>{title}</h3>
        {!!description && (
          <span className={styles.Description}>{description}</span>
        )}
      </div>
      <div className={styles.Content}>{children}</div>
    </form>
  );
};
