import React, {useEffect, useState} from 'react'
import styles from "./Entertainment.module.css";
import axios from "axios";
import useFetchMovie from '../../hooks/useFetchMovie';

const options = {
  method: "GET",
  url: "https://moviesdatabase.p.rapidapi.com/titles",
  params: {
    page: "1",
    year: "2000",
    endYear: "2022",
    limit: "10",
    sort: "year.decr",
    genre: "Drama",
  },
  headers: {
    "X-RapidAPI-Key": "6caae84b86msh7513283296526a5p1edaa1jsn38a173cf8be2",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

const Entertainment = () => {
    const first = useFetchMovie({ title: "Drama" });
    const second = useFetchMovie({ title: "Action" });
    const third = useFetchMovie({ title: "Horror" });

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <p>Super App</p>
        <div className={styles.profile}>
          <img
            src="https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
            alt="profile image"
          ></img>
        </div>
      </div>
      <div className={styles.content}>
        <h2>Entertainment According to Your choice</h2>
        <p>Drama</p>
        <div className={styles.movieContainer}>
          {first?.map((movie, ind) => {
            return (
              <img
                key={ind}
                className={styles.movie}
                src={movie?.primaryImage?.url}
              />
            );
          })}
        </div>
        <p>Action</p>
        <div className={styles.movieContainer}>
          {second?.map((movie, ind) => {
            return (
              <img
                key={ind}
                className={styles.movie}
                src={movie?.primaryImage?.url}
              />
            );
          })}
        </div>
        <p>Horror</p>
        <div className={styles.movieContainer}>
          {third?.map((movie, ind) => {
            return (
              <img
                key={ind}
                className={styles.movie}
                src={movie?.primaryImage?.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Entertainment