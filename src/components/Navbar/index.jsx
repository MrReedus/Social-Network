import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.item}>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs">Messages</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li>
          <NavLink to="/setting">Setting</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
