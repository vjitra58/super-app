import React, {useEffect, useState} from 'react'
import styles from "./Weather.module.css"
import DisplayWeather from '../displayWeather/DisplayWeather';
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState({
    datetime: "2023-02-26 20:32",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
    const callweather = async () => {
      try {
        await axios
          .get(
            "https://api.weatherapi.com/v1/current.json?key=ec55b61a342d431fbbd145351232602&q=new delhi&aqi=yes"
          )
          .then((response) => {
            setWeather({
              temp: response.data.current.temp_c,
              condition: response.data.current.condition.text,
              icon: response.data.current.condition.icon,
              wind: response.data.current.wind_kph,
              humidity: response.data.current.humidity,
              pressure: response.data.current.pressure_mb,
              datetime: response.data.location.localtime,
            });
            setLoading(false);
          });
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    callweather();
    // console.log(weather);
  }, []);


  console.log(weather);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>{weather.datetime.split(" ")[0]}</p>
        <p>{weather.datetime.split(" ")[1]}</p>
      </div>

      <div className={styles.bottom}>
        <div className={styles.weatherBox}>
          <i class="fa-solid fa-cloud"></i>
          <p>{weather.condition}</p>
        </div>
        <div className={styles.weatherLine}></div>
        <div className={styles.weatherBox}>
          <h1>{weather.temp}°C</h1>
          <DisplayWeather
            val={weather.pressure}
            name={"pressure"}
            unit={"mbar"}
            icon="fa-solid fa-temperature-half"
          />
        </div>
        <div className={styles.weatherLine}></div>
        <div className={styles.weatherBox}>
          <div>
            <DisplayWeather
              val={weather.wind}
              name={"wind"}
              unit="km/h"
              icon="fa-solid fa-wind"
            />
          </div>
          <div>
            <DisplayWeather
              val={weather.humidity}
              name="humidity"
              unit="%"
              icon="fa-solid fa-sun"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather