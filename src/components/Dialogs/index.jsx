import React from "react";
import styles from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, id }) => {
  let path = `/dialogs/${id}`;
  return (
    <div className={styles.item}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};
const Message = ({ text }) => {
  return <div className={styles.message}>{text}</div>;
};

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Eugine" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Vlad" },
    { id: 4, name: "Dima" },
    { id: 5, name: "Diana" },
    { id: 6, name: "Maksim" },
    { id: 7, name: "Mark" },
  ];

  let dialogElements = dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{dialogElements}</div>

      <div className={styles.messages}>
        <Message text="dadsad" />
        <div className={styles.message}>bla bla bla</div>
        <div className={styles.message}>pipec! </div>
      </div>
    </div>
  );
};

export default Dialogs;
