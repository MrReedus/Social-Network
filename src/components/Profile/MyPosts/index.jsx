import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post";
import { addPostACtionCreator, onChangePostActionCreator } from "../../../Redux/state";

const MyPosts = ({ posts, newPostText, dispatch }) => {
  let postElements = posts.map((post) => {
    return <Post key={post.id} text={post.text} likeCount={post.likeCount} />;
  });

  let newPostElement = React.createRef(); //* создали ссылку, ссылаемся на textarea обозначив её там.

  const addNewPost = () => {
    dispatch(addPostACtionCreator());
  };

  const onChangePost = () => {
    let text = newPostElement.current.value;
    let action = onChangePostActionCreator(text);
    dispatch(action);
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
        <button className="button" onClick={addNewPost}>
          add post
        </button>
        <button
          className="button"
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
