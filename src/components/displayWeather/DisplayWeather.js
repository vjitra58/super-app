import React from 'react'
import styles from "./style.module.css"


const DisplayWeather = ({name, val, unit, icon}) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <i class={icon}></i>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
            {val} {unit}
        </div>
        <div className={styles.bottom}>
            {name}
        </div>
      </div>
    </div>
  );
}

export default DisplayWeather