import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Messeges</a>
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
