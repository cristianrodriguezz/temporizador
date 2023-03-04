import { useState, useRef, useEffect } from 'react';
import Hamster from './components/Hamster'
import HamsterSinAnimate from './components/HamsterSinAnimate';
import SoundAt15Seconds from './components/SoundAt15Seconds';
import SoundsRandmon from './components/SoundsRandmon';
import SoundAtPass from './components/SoundAtPass';

const App = () => {
  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(1);
  const [intervalId, setIntervalId] = useState(0);
  const [isRestart, setIsRestart] = useState(false);
  const [cero, setCero] = useState(false);
  const [sound, setSound] = useState(false);
  const [soundAt15seconds, setSoundAt15seconds] = useState(false);
  const [soundAtPass, setSoundAtPass] = useState(false);
 
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
    setSoundAtPass(true)
    setTimeout(() => {
      setSoundAtPass(false)
    }, 1000);
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
    } else {
      setCero(false)
    }
    if (seconds === 1 && minutes === 0){
      setSound(true)
      setTimeout(() => {
        setSound(false)
      }, 5000);
    }
    if (seconds === 14 && minutes === 0){
      setSoundAt15seconds(true)
      setTimeout(() => {
        setSoundAt15seconds(false)
      }, 5000);
    }

  }, [seconds, soundAtPass])
  

  return (
    <div className="timer" style={isRestart ? {backgroundColor:"blue", width:"100%", height:"100vh"} :{ backgroundColor:"green", width:"100%", height:"100vh"}}>
      
      {intervalId ?  <Hamster/> : <HamsterSinAnimate/> }
      {cero  
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
      {
        sound ?
        <SoundsRandmon/>
        :
        <div></div>
      }
      {
        soundAt15seconds ?
        <SoundAt15Seconds/>
        :
        <div></div>
      }
      {
        soundAtPass ?
        <SoundAtPass/>
        :
        <div></div>
      }
      
    </div>
  );
};

export default App;
