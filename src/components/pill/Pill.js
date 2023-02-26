import React from 'react'
import styles from "./Pill.module.css";

const Pill = ({name, color, dispatch}) => {

  const generes = JSON.parse(localStorage.getItem("selectedGenres")) || [];

  const handleClick = (e) => {
    console.log("removed", name);
    generes.find((item, index) => {
      if(item.name === name){
        generes.splice(index, 1);
        dispatch({type:"REMOVE", name:name})
      }
    })
  }

  return (
    <div style={{backgroundColor:color}} className={styles.container}>
      <p>{name}</p>
      <i onClick={handleClick} class="fa-solid fa-xmark"></i>
    </div>
  );
}

export default Pill