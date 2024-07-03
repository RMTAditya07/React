import React, { useState } from "react";
import "./StopWatch.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
import axios from "axios";
  
function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  let [g,sg] = useState("")
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    axios.get("https://fakestoreapi.com/products/1").then(d=>{
      console.log(d) 
      // array Element rendering in react using loops
      // labda functions
    })
    
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  cont list=[<h1>sdsds</h1>]
  return (
    <div className="stop-watch">
      <Timer time={time} />
      {g}
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
      {list}
      {DataTransfer.map(e=>)}

    </div>
  );
}
  
export default StopWatch;