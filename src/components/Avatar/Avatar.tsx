import { NavLink } from "react-router-dom";

import { classes } from "@/utils/classes.util";

import styles from "./Avatar.module.css";

type Props = {
  name?: string;
  image?: string;
  link?: string;
  onClick?: () => void;
};

export const Avatar = ({ image, name, link, onClick }: Props) => {
  const letters = name
    ?.split(" ")
    .map((a) => a[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={classes(styles.Avatar, link && styles.Clickable)}
      onClick={onClick}
    >
      {!!image && !name && <img className={styles.Image} />}
      {!!letters && !image && <span className={styles.Name}>{letters}</span>}
      {!!link && <NavLink to={link} className={styles.Link} />}
    </div>
  );
};
