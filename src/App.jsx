import { useState, useRef, useEffect } from 'react';
import Hamster from './components/Hamster'
import HamsterSinAnimate from './components/HamsterSinAnimate';

const App = () => {
  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(1);
  const [intervalId, setIntervalId] = useState(0);
  const [isRestart, setIsRestart] = useState(false);
  const [cero, setCero] = useState(false);

  const handlePause = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
    const newIntervalId = setInterval(() => {
      setSeconds(prevCount => prevCount - 1);

    }, 1000);
    setIntervalId(newIntervalId);
  };
  const handleRestart = () => {
    setMinutes(1)
    setSeconds(30)
    setIsRestart(!isRestart)
  }

  useEffect(() => {
    if (seconds === 0 && minutes === 0){
      setSeconds(30)
      setMinutes(1)
      setIsRestart(!isRestart)
  } else if (seconds === 0){
      setSeconds(59)
      setMinutes(0)
  }
    if(seconds <= 9 ){
      setCero(true)
    }else{
      setCero(false)
    }

  }, [seconds])
  

  return (
    <div className="timer" style={isRestart ? {backgroundColor:"blue", width:"100%", height:"100vh"} :{ backgroundColor:"green", width:"100%", height:"100vh"}}>
      {intervalId ?  <Hamster/> : <HamsterSinAnimate/> }
      {
        cero 
        ?
        <h1>{minutes}:0{seconds}</h1>
        :
        <h1>{minutes}:{seconds}</h1>
      }

      <div >
        <button class="button" onClick={handlePause}>
          {intervalId ? "PAUSA" : "REAUNDAR"}
        </button>
        <button class="button" onClick={handleRestart}>
          RESTART
        </button>
      </div>
    </div>
  );
};

export default App;
