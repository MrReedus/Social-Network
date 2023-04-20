import React from "react";
import styles from "./Profile.module.scss";
const Profile = () => {
  return (
    <div className="content">
      <img src="https://wallpapers.com/images/hd/city-basketball-court-street-gkz98iv9ljs2nwv8.jpg" alt="" />

      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img
            src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png"
            alt="avatar"
          />
        </div>
        <div class="user-text">
          <h2>Evgenii Nikonov</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quasi accusamus voluptatem sunt corporis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
