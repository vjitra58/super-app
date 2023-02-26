import React, {useState, useRef, useEffect} from 'react'
import styles from "./Genre.module.css";


const Genre = ({ dispatch, name, image, color, selectedGenre }) => {
  const [selected, setSelected] = useState(false);
  const generes = JSON.parse(localStorage.getItem("selectedGenres")) || [];
  const refe = useRef();

  

  useEffect(()=>{
    if(generes.find((item) => item.name === name)){
      refe.current.classList.add(styles.selected);
      setSelected(true);
    }else{
      refe.current.classList.remove(styles.selected);
      setSelected(false);
    }
  }, [generes]);

  const handleClick = (e) => {
    if (selected) {
      console.log("removed", name);
      dispatch({ type: "REMOVE", name: name });
      refe.current.classList.remove(styles.selected);
      setSelected(false);
    } else {
      console.log("added", name);
      dispatch({
        type: "ADD",
        payload: { name: name, image: image, color: color },
      });
      refe.current.classList.add(styles.selected);
      setSelected(true);
    }
  };

  return (
    <div
      ref={refe}
      onClick={() => handleClick()}
      className={styles.container}
      style={{ backgroundColor: color }}
    >
      <p>{name}</p>
      <div>
        <img src="/image2.png" alt="genre image" />
      </div>
    </div>
  );
};

export default Genre