import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post";

const MyPosts = ({ posts, addPost }) => {
  let postElements = posts.map((post) => {
    return <Post key={post.id} text={post.text} likeCount={post.likeCount} />;
  });
  let newPostElement = React.createRef(); //* создали ссылку, ссылаемся на textarea обозначив её там.

  const addNewPost = () => {
    let textPost = newPostElement.current.value; //* получаем значение текушего textarea.
    addPost(textPost);
  };

  return (
    <div className={styles.posts}>
      <div className={styles.container}>
        <textarea ref={newPostElement} className={styles.textarea} name="" id="" cols="20" rows="5" value="123" />
        <button className={styles.button} onClick={addNewPost}>
          add post
        </button>
        <button
          className={styles.button}
          onClick={() => {
            alert("remove");
          }}
        >
          remove
        </button>
      </div>

      <h2>Posts</h2>
      {postElements}
    </div>
  );
};

export default MyPosts;
