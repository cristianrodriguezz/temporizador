import { useState, useRef, useEffect } from 'react';
import './App.css'


function App() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [isRestart, setIsRestart] = useState(false);
  const ref = useRef();

useEffect(() => {
  const timer = setInterval(() => 
      setSeconds(prevCount => prevCount - 1)

  ,1000);

   if (seconds === 0 && minutes === 0){
      setSeconds(30)
      setMinutes(1)
      setIsRestart(!isRestart)
  } else if (seconds === 0){
      setSeconds(59)
      setMinutes(0)
  }
  return () => clearInterval(timer);

}, [seconds]);

return (
  <div ref={ref} className="timer" style={isRestart ? {backgroundColor:"red", width:"100%", height:"100vh"} :{ backgroundColor:"green", width:"100%", height:"100vh"}}>
      {minutes}:{seconds}
  </div>
);
};

export default App
