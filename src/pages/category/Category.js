import React from 'react'
import styles from "./Category.module.css";
import Pill from "../../components/pill/Pill.js";
import Genre from "../../components/genre/Genre.js";

const genres = [
  {
    name: "Action",
    image: "image2",
    color: "#FF5209",
  },
  {
    name: "Drama",
    image: "image2",
    color: "#D7A4FF",
  },
  {
    name: "Romance",
    image: "image2",
    color: "#148A08",
  },
  {
    name: "Thriller",
    image: "image2",
    color: "#84C2FF",
  },
  {
    name: "Western",
    image: "image2",
    color: "#902500",
  },
  {
    name: "Horror",
    image: "image2",
    color: "#7358FF",
  },
  {
    name: "Fantasy",
    image: "image2",
    color: "#FF4ADE",
  },
  {
    name: "Music",
    image: "image2",
    color: "#E61E32",
  },
  {
    name: "Fiction",
    image: "image2",
    color: "#6CD061",
  },
];


const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.category_left}>
        <h1>Super app</h1>
        <p>Choose your entertainment category</p>
        <div className={styles.selected_category}>
          <Pill name="Movies" />
          <Pill name="Movies" />
          <Pill name="Movies" />
          <Pill name="Movies" />
        </div>
      </div>
      <div className={styles.category_right}>
        {genres.map((genra) => {
            return <Genre name={genra.name} image={genra.image} color={genra.color} />;
        })}
      </div>
      <button>Next Page</button>
    </div>
  );
}

export default Category