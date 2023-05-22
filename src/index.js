import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let renderEntireThree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
      </React.StrictMode>
    </BrowserRouter>
  );
};

renderEntireThree(store.getState);

store.subscribe(renderEntireThree);
