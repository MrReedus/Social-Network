import React from "react";
import styles from "../Dialogs.module.scss";

const textAreaBlock = () => {
  return (
    <div className={styles.textAreaWrapper}>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
};

export default textAreaBlock;
