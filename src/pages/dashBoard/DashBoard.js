import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import styles from "./DashBoard.module.css";
import Profile from "../../components/profile/Profile.js";
import News from "../../components/news/News.js";
import Weather from "../../components/weather/Weather.js";
import Notes from "../../components/notes/Notes.js";
import Timer from "../../components/timer/Timer.js";

const DashBoard = () => {

  const navigate = useNavigate();
   
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.profile}>
                <Profile />
            </div>
            <div className={styles.weather}>
                <Weather />
            </div>
          </div>
          <div className={styles.topRight}>
            <Notes />
          </div>
        </div>
        <div className={styles.bottom}>
            <Timer />
        </div>
      </div>
      <div className={styles.right}>
        <News/>
      </div>
      <button onClick={()=>navigate("/entertainment")}>Browse</button>
    </div>
  );
}


export default DashBoard