import React, { useState, useEffect } from "react";
import "./App.css";

function Clock() {
  const [date, setDate] = useState(new Date());

  const[timer,setTimer]=useState(0);
  const[on,setOn]=useState(false);

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  useEffect(()=>{
    let interval=null;
    if(on){
      interval=setInterval(()=>{
        setTimer((prev)=>prev+1);
      },1000);
    }
    return () => clearInterval(interval);
  },[on]);

  return (
    <div className="container">
      <h1>Clock</h1>
      <span className="time">{date.toLocaleTimeString()}</span>

      <h1>Stopwatch</h1>
      <h2>{timer}sec</h2>
      <button onClick={() => setOn(true)}>Start</button>
      <button onClick={() => setOn(false)}>Stop</button>
      <button onClick={() => setTimer(0)}>Reset</button>
    </div>
  );
}

export default Clock;