import React from "react";
import { Route, Routes } from "react-router-dom";

import Dialogs from "./components/Dialogs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

import "./scss/app.scss";

const App = ({ state, dispatch }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/profile" element={<Profile ProfileData={state.profilePage} dispatch={dispatch} />} />
          <Route path="/dialogs/*" element={<Dialogs messagesData={state.messagesPage} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
