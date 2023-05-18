import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post";

const MyPosts = ({ posts, addPost, newPostText, updateNewPostText }) => {
  let postElements = posts.map((post) => {
    return <Post key={post.id} text={post.text} likeCount={post.likeCount} />;
  });

  let newPostElement = React.createRef(); //* создали ссылку, ссылаемся на textarea обозначив её там.

  const addNewPost = () => {
    addPost()
    // let textPost = newPostElement.current.value; //* получаем значение текушего textarea.
    // addPost(textPost);
  };

  const onChangePost = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  };
  return (
    <div className={styles.posts}>
      <div className={styles.container}>
        <textarea
          ref={newPostElement}
          className={styles.textarea}
          onChange={onChangePost}
          cols="20"
          rows="5"
          value={newPostText}
        />
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
