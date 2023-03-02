import React, {useState} from 'react'
import styles from "./Profile.module.css"
import Pill from "../pill/Pill.js"

const Profile = () => {
   const [selectedGenres, setSelectedGenres] = useState(
     JSON.parse(localStorage.getItem("selectedGenres")) || []
   );
   const user = JSON.parse(localStorage.getItem("user"));
   console.log(selectedGenres, "from profile");

  return (
    <div className={styles.container}>
      <div className={styles.profileImage}>
        <img
          className={styles.imgClass}
          src="profile.png"
          alt="profile image"
        />
      </div>
      <div className={styles.profileDetails}>
        <div className={styles.details}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <h1>{user.username}</h1>
        </div>
        <div className={styles.intrest}>
          {selectedGenres.map((genre, index) => {
            return (
              <div key={index} className={styles.pills}>
                <Pill name={genre.name} color="#9F94FF" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile