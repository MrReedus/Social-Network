import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post";
const MyPosts = () => {
  return (
    <div className={styles.posts}>
      <div className={styles.container}>
        <textarea className={styles.textarea} name="" id="" cols="20" rows="5"></textarea>
        <button className={styles.button}>add post</button>
        <button className={styles.button}>remove</button>
      </div>

      <h2>Posts</h2>
      <Post
        imageUrl={"https://heaclub.ru/tim/9ead4b466d81ed663ff30ea0414a4426/kartinka-na-avu-dlya-parnei-prikolnaya.jpg"}
        text={"Я изучаю REACT"}
      />
      <Post
        imageUrl="https://mobimg.b-cdn.net/v3/fetch/f5/f54a3aa85c95c03fa6fb8cf83e531f6e.jpeg"
        text={"Я тоже, уже знаю как использовать пропсы!"}
      />

      <Post
        imageUrl={" https://pixelbox.ru/wp-content/uploads/2022/08/avatars-viber-pixelbox.ru-33.jpg"}
        text={"А я бэкэндир мине пахую"}
      />
    </div>
  );
};

export default MyPosts;
