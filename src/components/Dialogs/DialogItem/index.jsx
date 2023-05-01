import styles from "./../Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, id }) => {
  let path = `/dialogs/${id}`;
  return (
    <div className={styles.item}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
