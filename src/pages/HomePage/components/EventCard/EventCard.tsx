import { format, formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { NavLink } from "react-router-dom";

import { Event } from "../../../../api/models/event-model";
import styles from "./EventCard.module.css";

type Props = {
  event: Event;
};

export const EventCard = ({ event }: Props) => {
  const eventDate = new Date(event.date);
  const formattedDate = formatDistanceToNow(eventDate, { locale: ru });
  const date = format(eventDate, "dd MMMM", { locale: ru });

  return (
    <div className={styles.EventCard}>
      <h3 className={styles.Title}>{event.title}</h3>
      <p className={styles.Description}>{event.description}</p>
      <div className={styles.Footer}>
        <span className={styles.Date}>
          Через {formattedDate} - {date}
        </span>
        <span className={styles.Date}>{event.organizer}</span>
      </div>
      <NavLink to={`/apply/${event.id}`} className={styles.CardLink} />
    </div>
  );
};
