import { Application } from "../../../../api/models/application-model";
import { TeamCard } from "../TeamCard";
import styles from "./Applications.module.css";

type Props = {
  applications: Application[];
  current?: string;
  count: number;
};

export const Applications = ({ applications }: Props) => {
  return (
    <div className={styles.Applications}>
      <h3 className={styles.Title}>Отправленные заявки</h3>
      <p className={styles.Text}>
        Проверьте что ваша команда отображается здесь, в отправленных заявках
      </p>
      {applications.map((application) => (
        <TeamCard application={application} />
      ))}
    </div>
  );
};
