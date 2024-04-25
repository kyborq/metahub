import styles from "./MessageBox.module.css";

type Props = {
  icon?: React.ReactNode;
  title: string;
  text?: string;
  children?: React.ReactNode;
};

export const MessageBox = ({ title, icon, text, children }: Props) => {
  return (
    <div className={styles.MessageBox}>
      {icon}
      <div className={styles.Info}>
        <h3 className={styles.Title}>{title}</h3>
        {!!text && <p className={styles.Text}>{text}</p>}
      </div>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};
