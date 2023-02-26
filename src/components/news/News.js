import React, {useState, useEffect} from 'react'
import styles from "./News.module.css"
import axios from "axios";

const News = () => {

  const [article, setArticle] = useState({ publishedAt: "2023-02-26T20:32" });
  const [selectedGenres, setSelectedGenres] = useState(
    JSON.parse(localStorage.getItem("selectedGenres")) || [{ id: 1, name: "technology"}]
  );

   useEffect(() => {
     const callNews = async () => {
       try{
        const topic = selectedGenres[Math.floor(Math.random() * selectedGenres.length)].name;
        console.log("this is the topic", topic);
        await axios
          .get(
            `https://newsapi.org/v2/everything?q=${topic}&domains=techcrunch.com,thenextweb.com&pageSize=10&page=1&apiKey=fc4f2a6a0f5a48d7aa69aec5f4b3ac03`
          )
          .then((respomse) => {
            // console.log(respomse);
            setArticle({
              title: respomse.data.articles[0].title,
              description: respomse.data.articles[0].description,
              url: respomse.data.articles[0].url,
              urlToImage: respomse.data.articles[0].urlToImage,
              publishedAt: respomse.data.articles[0].publishedAt,
            });
          });
       }catch(error){
          console.log(error);
       }
     };

      callNews();
   }, []);

   console.log(article);
  return (
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url("${article.urlToImage}")` }}
        className={styles.image}
      >
        <div className={styles.heading}>
          <h1>{article.title}</h1>
          <p>
            {article.publishedAt.split("T")[0]} |{" "}
            {article.publishedAt.split("T")[1].substring(0, 5)}
          </p>
        </div>
      </div>
      <div className={styles.content}>{article.description}</div>
    </div>
  );
}



export default News