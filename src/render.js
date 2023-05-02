import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { addPost } from "./Redux/state";

export let renderEntireThree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} />
      </React.StrictMode>
    </BrowserRouter>
  );
};
