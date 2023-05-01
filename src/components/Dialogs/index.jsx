import React from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";
import styles from "./Dialogs.module.scss";

const Dialogs = ({ messagesData }) => {
  let dialogElements = messagesData.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatarUrl={dialog.avatarUrl} />
  ));
  let messageElements = messagesData.messages.map((message) => <Message key={message.id} text={message.text} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{dialogElements}</div>
      <div className={styles.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
