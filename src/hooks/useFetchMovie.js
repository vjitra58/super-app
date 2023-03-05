import React, {useEffect, useState} from 'react'
import axios from "axios";

const useFetchMovie = ({title}) => {
    const [movies, setMovies] = useState([]);

    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles",
      params: {
        page: "1",
        year: "2000",
        endYear: "2022",
        limit: "10",
        sort: "year.decr",
        genre: title,
      },
      headers: {
        "X-RapidAPI-Key": "6caae84b86msh7513283296526a5p1edaa1jsn38a173cf8be2",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    useEffect(()=>{
         axios
           .request(options)
           .then(function (response) {
             setMovies(response.data.results);
           })
           .catch(function (error) {
             console.error(error);
           });
    }, []);

    return movies;
}

export default useFetchMovie