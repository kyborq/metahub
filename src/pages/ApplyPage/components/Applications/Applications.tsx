import { Application } from "../../../../api/models/application-model";
import styles from "./Applications.module.css";

type Props = {
  applications: Application[];
  current?: string;
  count: number;
};

export const Applications = ({ applications, current, count }: Props) => {
  const available = new Array(count)
    .fill(0)
    .map((_, index) => applications[index] || null);

  return (
    <div className={styles.Applications}>
      <h3 className={styles.Title}>Отправленные заявки</h3>
      <p className={styles.Text}>
        Проверьте что ваша команда отображается здесь, в отправленных заявках
      </p>
      {available.map((application, index) =>
        application ? (
          <div key={application.id} className={styles.Application}>
            {`${index + 1}`.padStart(2, "0")} - {application.team}{" "}
            {current === application.id && <span>👈</span>}
          </div>
        ) : (
          <div key={index} className={styles.Application}>
            {`${index + 1}`.padStart(2, "0")}
          </div>
        )
      )}
    </div>
  );
};
