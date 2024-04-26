import { Application } from "../../../../api/models/application-model";
import styles from "./TeamCard.module.css";

type Props = {
  application: Application;
};

export const TeamCard = ({ application }: Props) => {
  return (
    <div className={styles.TeamCard}>
      <h4 className={styles.Title}>{application.team}</h4>
      <div className={styles.Members}>
        {application.expand.members.map((member) => (
          <div className={styles.Member}>
            <div className={styles.Avatar}>
              {member.name
                .split(" ")
                .map((a) => a[0])
                .join("")
                .toUpperCase()}
            </div>
            <span className={styles.Name}>{member.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
