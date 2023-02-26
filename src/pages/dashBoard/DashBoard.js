import React, {useState} from 'react'
import styles from "./DashBoard.module.css";
import Profile from "../../components/profile/Profile.js";
import News from "../../components/news/News.js";
import Weather from "../../components/weather/Weather.js";


const DashBoard = () => {
   
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.profile}>
                <Profile />
            </div>
            <div className={styles.weather}>
                <Weather />
            </div>
        </div>
        <div className={styles.right}>
            <News />
        </div>
    </div>
  )
}

export default DashBoard