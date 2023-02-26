import React, {useEffect, useReducer} from 'react'
import styles from "./Category.module.css";
import Pill from "../../components/pill/Pill.js";
import Genre from "../../components/genre/Genre.js";
import genres from "../../data/genreData";

import {useNavigate} from "react-router-dom";



const initialState = JSON.parse(localStorage.getItem("selectedGenres")) || [];
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
        return [...state, action.payload];
        case "REMOVE":
        return state.filter((item) => item.name !== action.name);
        default:
        return state;
    }
}


const Category = () => {

    const [selectedGenres, dispatch] = useReducer(reducer, initialState);

    const navigate = useNavigate();

    useEffect(()=>{
      localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
    }, [selectedGenres])

    const handleClick = () => {
        navigate("/dashboard");
    }

  return (
    <div className={styles.category}>
      <div className={styles.category_left}>
        <h1>Super app</h1>
        <p>Choose your entertainment category</p>
        <div className={styles.selected_category}>
          {selectedGenres.map((genra, i) => {
            return <Pill dispatch={dispatch} color="#148A08" key={i} name={genra.name} />;
          })}
        </div>
      </div>
      <div className={styles.category_right}>
        {genres.map((genra, i) => {
          return (
            <Genre
              key={i}
              selectedGenre={selectedGenres}
              dispatch={dispatch}
              name={genra.name}
              image={genra.image}
              color={genra.color}
            />
          );
        })}
      </div>
      <button className={styles.nextButton} onClick={handleClick}>
        Next Page
      </button>
    </div>
  );
}

export default Category