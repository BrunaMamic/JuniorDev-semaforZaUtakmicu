import { useState } from "react";
import "./timer.css";

const Timer = (props: any) => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  const getTime = () => {
    if (min <= 90) {
      setSec((prevState) => {
        if (prevState === 59) {
          setMin((prevState) => {
            return prevState + 1;
          });
          return 0;
        } else
        return prevState + 1;
      });
    }
  };

  const timerMinuta = () => {
    let sec = 90 * 60;
    const timer = setInterval(function () {
      getTime();
      sec--;
      if (sec === 0) {
        clearInterval(timer);
      }
    }, 1000);
  };

  const startTimer = () => {
    setTimerStarted(true);
    timerMinuta();
  };

  const vratiNaNulu = () => {
    props.postaviBroj(0);
    props.postaviDrugi(0);
    setMin(0);
    setSec(0);
  };

  return (
    <>
      <div className="timer">
        {min < 10 ? "0" + min : min}
        <span>:</span>
        {sec < 10 ? "0" + sec : sec}
      </div>
      <div>
        <button className="startButton" onClick={() => {
            if(!timerStarted){
                startTimer();
            }
          }}>
          START</button>
        <button className="resetButton" onClick={vratiNaNulu}>RESET</button>
      </div>
    </>
  );
};

export default Timer;
