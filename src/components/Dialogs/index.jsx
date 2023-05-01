import React from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";
import styles from "./Dialogs.module.scss";
import { dialogs, messages } from "../../index";

const Dialogs = () => {
  let dialogElements = dialogs.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{dialogElements}</div>

      <div className={styles.messages}>
        {messages.map((message) => (
          <Message key={message.id} text={message.text} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
