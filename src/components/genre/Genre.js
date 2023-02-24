import React from 'react'
import styles from "./Genre.module.css";


const Genre = ({name, image, color}) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <p>{name}</p>
      <div>
        <img
          src="/image2.png"
          alt="genre image"
        />
      </div>
    </div>
  );
}

export default Genre