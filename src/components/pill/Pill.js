import React from 'react'
import styles from "./Pill.module.css";

const Pill = ({name}) => {
  return (
    <div className={styles.container}>
      <p>{name}</p>
      <i class="fa-solid fa-xmark"></i>
    </div>
  );
}

export default Pill