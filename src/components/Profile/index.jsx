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
          <div className={styles.info}>
            <p>
              Date of birth: <span>02.01.1996</span>
            </p>
            <p>
              City <span>Kemerovo</span>
            </p>
            <p>
              {" "}
              Education <span>TGASU</span>
            </p>
          </div>
          <div className={styles.posts}>
            <h2>Posts</h2>
            <div className={styles.post}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum vero, repellendus possimus
              molestias quibusdam assumenda culpa adipisci molestiae expedita inventore tempora nemo eos odio aut odit
              magnam hic eius.
            </div>
            <div className={styles.post}>
              {" "}
              Color sit amet consectetur adipisicing elit. Quisquam nostrum vero, repellendus possimus molestias
              quibusdam assumenda culpa adipisci molestiae expedita inventore tempora nemo eos odio aut odit magnam hic
              eius.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
