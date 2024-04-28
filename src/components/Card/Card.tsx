import styles from "./Card.module.css";

type Props = {
  icon?: React.ReactNode;
  action?: React.ReactNode;
  title?: string;
  text?: string;
  children?: React.ReactNode;
};

export const Card = ({ icon, title, text, action, children }: Props) => {
  return (
    <div className={styles.Card}>
      {!!title && (
        <div className={styles.Header}>
          {icon}
          <div className={styles.HeaderText}>
            <h3 className={styles.Title}>{title}</h3>
            <span className={styles.Text}>{text}</span>
          </div>
          {action}
        </div>
      )}
      {!!children && <div className={styles.Content}>{children}</div>}
    </div>
  );
};
