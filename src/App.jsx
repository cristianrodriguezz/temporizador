import { useState, useRef, useEffect } from "react";
import Hamster from "./components/Hamster";
import HamsterSinAnimate from "./components/HamsterSinAnimate";
import SoundAt15Seconds from "./components/SoundAt15Seconds";
import SoundsRandmon from "./components/SoundsRandmon";
import SoundAtPass from "./components/SoundAtPass";
import useSeconds from "./hooks/useSeconds.js";

const App = () => {



  const {
    seconds,
    setIsRestart,
    minutes,
    isRestart,
    setSoundAtPass,
    soundAtPass,
    soundAt15seconds,
    sound,
    cero,
    setMinutes,
    setSeconds,
  } = useSeconds();

  const [intervalId, setIntervalId] = useState(0);

  const handlePause = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
    const newIntervalId = setInterval(() => {
      setSeconds((prevCount) => prevCount - 1);
    }, 1000);
    setIntervalId(newIntervalId);
  };
  const handleRestart = () => {
    setMinutes(1);
    setSeconds(30);
    setIsRestart(!isRestart);
    setSoundAtPass(true);
    setTimeout(() => {
      setSoundAtPass(false);
    }, 2000);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setInputSecond(event.target.value);
  };

  return (
    <div
      className="timer"
      style={
        isRestart
          ? { backgroundColor: "blue", width: "100%", height: "100vh" }
          : { backgroundColor: "red", width: "100%", height: "100vh" }
      }
    >
      {intervalId ? <Hamster /> : <HamsterSinAnimate />}
        <h1>
          {minutes}:{seconds < 10 ? "0" + seconds: seconds} 
        </h1>

      <div>
        <button class="button" onClick={handlePause}>
          {intervalId ? "PAUSA" : "REAUNDAR"}
        </button>
        <button class="buttonRestart" onClick={handleRestart} >
          RESTART
        </button>
      </div>
      {sound ? <SoundsRandmon /> : <div></div>}
      {soundAt15seconds ? <SoundAt15Seconds /> : <div></div>}
      {soundAtPass ? <SoundAtPass /> : <div></div>}
    </div>
  );
};

export default App;
