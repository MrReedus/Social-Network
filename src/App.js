import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dialogs from "./components/Dialogs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

import "./scss/app.scss";

const App = ({ state }) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/profile" element={<Profile ProfileData={state.profilePage} />} />
            <Route path="/dialogs/*" element={<Dialogs messagesData={state.messagesPage} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
