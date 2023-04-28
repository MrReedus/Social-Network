import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link to="/dialogs">
            {" "}
            <a>Messeges</a>
          </Link>
        </li>
        <li>
          <a>News</a>
        </li>
        <li>
          <a>Music</a>
        </li>
        <li>
          <a>Setting</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
