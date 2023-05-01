import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let dialogs = [
  { id: 1, name: "Eugine" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Vlad" },
  { id: 4, name: "Dima" },
  { id: 5, name: "Diana" },
  { id: 6, name: "Maksim" },
  { id: 7, name: "Mark" },
];
let messages = [
  { id: 1, text: "Hi, how are you?" },
  { id: 2, text: "What is your need?" },
  { id: 3, text: "It's cool!" },
  { id: 4, text: "Hmm...Not bad ;)" },
  { id: 5, text: "good night, sweety " },
  { id: 6, text: "^^" },
  { id: 7, text: "get your Card, please" },
];

let posts = [
  {
    id: 1,
    text: "Hello world",
    url: "https://heaclub.ru/tim/9ead4b466d81ed663ff30ea0414a4426/kartinka-na-avu-dlya-parnei-prikolnaya.jpg",
  },
  { id: 2, text: "YES!!!", url: "https://mobimg.b-cdn.net/v3/fetch/f5/f54a3aa85c95c03fa6fb8cf83e531f6e.jpeg" },
  {
    id: 3,
    text: "React is AMAIZING",
    url: "https://pixelbox.ru/wp-content/uploads/2022/08/avatars-viber-pixelbox.ru-33.jpg",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { messages, dialogs, posts };
