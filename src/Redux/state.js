import { renderEntireThree } from "../render";
let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        text: "Hello world",
        likeCount: 7,
      },
      {
        id: 2,
        text: "YES!!!",
        likeCount: 10,
      },

      {
        id: 3,
        text: "React is AMAIZING",
        likeCount: 42,
      },
    ],
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: "Eugine", avatarUrl: "https://i.ytimg.com/vi/_SQeoxVROz8/maxresdefault.jpg" },
      {
        id: 2,
        name: "Sasha",
        avatarUrl: "https://mobimg.b-cdn.net/v3/fetch/a1/a183c6ee946a76b81cce1ba78887f634.jpeg",
      },
      {
        id: 3,
        name: "Vlad",
        avatarUrl:
          "https://static.jobdone.net/images_staging/6358/provide-you-services-in-ms-office-and-as-a-writer-lNlIadXYkS.png",
      },
      {
        id: 4,
        name: "Dima",
        avatarUrl:
          "https://sun6-21.userapi.com/s/v1/if1/MM_hXVV3Cc7_N9_14X6-tyzKRAt8qyiW5ghtJYpdBm7oK7jybnqgfPtrrmbEYXSWiF5lkD2o.jpg?size=2017x2017&quality=96&crop=71,71,2017,2017&ava=1",
      },
      {
        id: 5,
        name: "Diana",
        avatarUrl:
          "https://yt3.googleusercontent.com/ytc/AL5GRJVsJY1Oe5y5jPPaTsRInCHk5AqvsBmZ7qZY2z9J=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 6,
        name: "Maksim",
        avatarUrl: "https://mindengrave.com/wp-content/uploads/2021/05/male-avatar.jpg",
      },
      {
        id: 7,
        name: "Mark",
        avatarUrl:
          "https://papik.pro/en/uploads/posts/2022-06/1655712245_10-papik-pro-p-cool-profile-picture-avatars-10.jpg",
      },
    ],
    messages: [
      { id: 1, text: "Hi, how are you?" },
      { id: 2, text: "What is your need?" },
      { id: 3, text: "It's cool!" },
      { id: 4, text: "Hmm...Not bad ;)" },
      { id: 5, text: "good night, sweety " },
      { id: 6, text: "^^" },
      { id: 7, text: "get your Card, please" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    text: postMessage,
    likecount: 0,
  };
  state.profilePage.posts.push(newPost);
  renderEntireThree(state);
};

export default state;
