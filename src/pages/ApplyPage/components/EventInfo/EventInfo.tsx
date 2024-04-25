import { format } from "date-fns";
import { Link } from "react-router-dom";

import { Event } from "../../../../api/models/event-model";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  SendIcon,
} from "../../../../assets/icons";
import styles from "./EventInfo.module.css";

type Props = {
  event: Event;
};

export const EventInfo = ({ event }: Props) => {
  const startTime = format(event.date, "HH:mm");
  const endTime = format(event.date_end, "HH:mm");
  const eventDate = format(event.date, "dd.MM.yyyy");

  return (
    <div className={styles.EventInfo}>
      <h2 className={styles.Title}>{event.title}</h2>
      <p className={styles.Description}>{event.description}</p>
      <div className={styles.Footer}>
        <div className={styles.Time}>
          <div className={styles.InfoCell}>
            <CalendarIcon />
            <span>{eventDate}</span>
          </div>
        </div>
        <div className={styles.Time}>
          <div className={styles.InfoCell}>
            <ClockIcon />
            <span>{startTime}</span>
          </div>
          <div className={styles.InfoCell}>
            <ArrowRightIcon />
            <span>{endTime}</span>
          </div>
        </div>
        <div className={styles.Links}>
          <Link to={event.doc} className={styles.Link}>
            <SendIcon />
            Положение
          </Link>
          <Link to={event.social} className={styles.Link}>
            <SendIcon />
            Телеграм
          </Link>
        </div>
      </div>
    </div>
  );
};
