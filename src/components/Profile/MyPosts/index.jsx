import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post";

const MyPosts = ({ posts }) => {
  let postElements = posts.map((post) => {
    return <Post key={post.id} text={post.text} imageUrl={post.url} />;
  });
  return (
    <div className={styles.posts}>
      <div className={styles.container}>
        <textarea className={styles.textarea} name="" id="" cols="20" rows="5"></textarea>
        <button className={styles.button}>add post</button>
        <button className={styles.button}>remove</button>
      </div>

      <h2>Posts</h2>
      {postElements}
    </div>
  );
};

export default MyPosts;
