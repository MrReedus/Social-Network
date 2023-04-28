import React from "react";
import styles from "./Post.module.scss";
const Post = ({ imageUrl, text }) => {
  return (
    <div className={styles.post}>
      <img src={imageUrl} alt="avatar" />
      <p>{text}</p>
      <span>like</span>
    </div>
  );
};

export default Post;
