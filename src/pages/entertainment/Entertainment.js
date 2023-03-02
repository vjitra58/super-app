import React from 'react'
import styles from "./Entertainment.module.css";


const Entertainment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <p>Super App</p>
        <div className={styles.profile}>
          <img
            src="https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
            alt="profile image"
          ></img>
        </div>
      </div>
      <div className={styles.content}>
        <h2>Entertainment According to Your choice</h2>
        <p>Action</p>
        <div className={styles.movieContainer}>
            
        </div>
        <p>Thriller</p>
        <p>Fiction</p>

      </div>
    </div>
  );
}

export default Entertainment