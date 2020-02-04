import React from "react";
import { useState, useEffect } from "react";
import "./Stopwatch.css";

const Stopwatch = level => {
  const startButton = (
    <button className={level} id="start-btn">
      ‎Start
    </button>
  );

  const stopButton = (
    <button className={level} id="stop-btn">
      Stop
    </button>
  );

  const pauseButton = (
    <button className={level} id="pause-btn">
      Pause
    </button>
  );

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [centiseconds, setCentiseconds] = useState(0);
  const [currentState, setCurrentState] = useState("Stopped");

  const dynamicButtons = () => {
    if (currentState === "Running") {
      return { pauseButton } + { stopButton };
    }
    if (currentState === "Stopped") {
      return { startButton };
    }
    if (currentState === "Paused") {
      return { startButton } + { stopButton };
    }
  };

  function tick() {
    if (centiseconds !== 99) {
      setCentiseconds(centiseconds + 1);
    } else if (seconds !== 59) {
      setCentiseconds(0);
      setSeconds(seconds + 1);
    } else {
      setCentiseconds(0);
      setSeconds(0);
      setMinutes(minutes + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 10);
    //
    return () => clearInterval(interval);
  });

  // eslint-disable-next-line
  function pause() {
    setCentiseconds(centiseconds);
    setSeconds(seconds);
    setMinutes(minutes);
    setCurrentState("Paused");
  }

  // eslint-disable-next-line
  function stop() {
    setCentiseconds(0);
    setSeconds(0);
    setMinutes(0);
    setCurrentState("Stopped");
  }

  return (
    <div id="watch">
      <h1>
        {minutes}:{seconds}.{centiseconds}
        {dynamicButtons}
      </h1>
    </div>
  );
};

export default Stopwatch;
