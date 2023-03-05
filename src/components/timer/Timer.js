import React, {useState, useRef} from 'react'
import styles from "./style.module.css";


const Timer = () => {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const audioref = useRef();
    const StopRef = useRef();
    function formatNumber(num){
        return num < 10 ? `0${num}` : num;
    }

     function RemainingTime() {
       return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(
         seconds
       )}`;
     }


    const changeSeconds = (increase)=>{
        if(increase){
            if(seconds < 59){
                setSeconds(seconds + 1);
            }else{
                setSeconds(0);
                changeMinutes(true);
            }
        }else{
            if(seconds > 0){
                setSeconds(seconds - 1);
            }else{
                setSeconds(59);
                changeMinutes(false);
            }
        }
    }

    const changeMinutes = (increase)=>{
        if(increase){
            if(minutes < 59){
                setMinutes(minutes + 1);
            }else{
                setMinutes(0);
                changeHours(true);
            }
        }else{
            if(minutes > 0){
                setMinutes(minutes - 1);
            }else{
                setMinutes(59);
                changeHours(false);
            }
        }
    }

    const changeHours = (increase)=>{
        if(increase){
            setHours(hours + 1);
        }else{
            if(hours > 0){
                setHours(hours - 1);
            }else{
                setHours(0);
            }
        }
    }

    const startTimer = () =>{
        let time = hours * 3600 + minutes * 60 + seconds;
        let originalTime = time;
        let timer = setInterval(()=>{
            console.log(time);
            if(time > 0){
                time--;
                setSeconds(time % 60);
                setMinutes(Math.floor(time / 60) % 60);
                setHours(Math.floor(time / 3600));
                // (time/originalTime)
            }else{
                clearInterval(timer);
            }
            if(time == 0){
                audioref.current.play();
                StopRef.current.innerHTML = "Stop";
            }
        }, 1000, audioref);
    }

    const handleStop = () =>{
        if(StopRef.current.innerHTML == "Stop"){
            StopRef.current.innerHTML = "00:00:00";
            audioref.current.pause();
            audioref.current.currentTime = 0;
        }
    }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
       
        <p onClick={handleStop} ref={StopRef}>
          {RemainingTime()}
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          {/*hours */}
          <div className={styles.timeKeeper}>
            <p>hours</p>
            <div className={styles.counter}>
              <div onClick={() => changeHours(true)} className={styles.arrow}>
                <img src="/up.svg" />
              </div>
              <p>{formatNumber(hours)}</p>
              <div onClick={() => changeHours(false)} className={styles.arrow}>
                <img src="/down.svg" />
              </div>
            </div>
          </div>
          {/*minutes */}
          <span>:</span>
          <div className={styles.timeKeeper}>
            <p>minutes</p>
            <div className={styles.counter}>
              <div onClick={() => changeMinutes(true)} className={styles.arrow}>
                <img src="/up.svg" />
              </div>
              <p>{formatNumber(minutes)}</p>
              <div
                onClick={() => changeMinutes(false)}
                className={styles.arrow}
              >
                <img src="/down.svg" />
              </div>
            </div>
          </div>
          {/*seconds */}
          <span>:</span>
          <div className={styles.timeKeeper}>
            <p>seconds</p>
            <div className={styles.counter}>
              <div onClick={() => changeSeconds(true)} className={styles.arrow}>
                <img src="/up.svg" />
              </div>
              <p>{formatNumber(seconds)}</p>
              <div
                onClick={() => changeSeconds(false)}
                className={styles.arrow}
              >
                <img src="/down.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <button onClick={startTimer} className={styles.btn}>
            Start
          </button>
        </div>
        <audio loop ref={audioref} src="bensound-moose.mp4"></audio>
      </div>
    </div>
  );
}

export default Timer