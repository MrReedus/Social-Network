import React from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";
import styles from "./Dialogs.module.scss";
import { sendMessageCreator, updateMessageBodyCreator } from "../../Redux/state";

const Dialogs = ({ messagesData, store }) => {
  let dialogElements = messagesData.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatarUrl={dialog.avatarUrl} />
  ));

  let messageElements = messagesData.messages.map((message) => <Message key={message.id} text={message.text} />);

  const onSendMessageClick = () => {
    store.dispatch(sendMessageCreator());
  };
  const onChangeNewMessage = (e) => {
    let body = e.target.value;
    store.dispatch(updateMessageBodyCreator(body));
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{dialogElements}</div>
      <div className={styles.messages}>{messageElements}</div>
      <div className={styles.textAreaWrapper}>
        <textarea
          onChange={onChangeNewMessage}
          value={messagesData.newMessageBody}
          className={styles.textArea}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter Your message..."
        ></textarea>
        <button className="button button--dialog" onClick={onSendMessageClick}>
          send message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
