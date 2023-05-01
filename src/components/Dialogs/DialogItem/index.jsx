import styles from "./../Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, id, avatarUrl }) => {
  let path = `/dialogs/${id}`;
  return (
    <div className={styles.item}>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img src={avatarUrl} alt="" />
        </div>
        <NavLink to={path}>{name}</NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
