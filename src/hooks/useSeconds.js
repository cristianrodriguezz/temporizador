import React, { useEffect, useState } from "react";

function useSeconds({ second, minute }){
    const [seconds, setSeconds] = useState(second);
    const [minutes, setMinutes] = useState(minute);
    const [sound, setSound] = useState(false);
    const [soundAt15seconds, setSoundAt15seconds] = useState(false);
    const [soundAtPass, setSoundAtPass] = useState(false);
    const [cero, setCero] = useState(false);
    const [isRestart, setIsRestart] = useState(false);

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
        if (seconds === 0 && minutes === 0){
          setSound(true)
          setTimeout(() => {
            setSound(false)
          }, 5000);
        }
        if (seconds === 12 && minutes === 0){
          setSoundAt15seconds(true)
          setTimeout(() => {
            setSoundAt15seconds(false)
          }, 5000);
        }
        
    
      }, [seconds, soundAtPass])

      return{ seconds , minutes, isRestart,setIsRestart, setSoundAtPass, soundAtPass , soundAt15seconds, sound , cero, setSeconds, setMinutes}
}
export default useSeconds;