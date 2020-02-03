import React from "react";
import { useState, useEffect } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [centiseconds, setCentiseconds] = useState(0);

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

    return () => clearInterval(interval);
  });

  // eslint-disable-next-line
  function pause() {
    setCentiseconds(centiseconds);
    setSeconds(seconds);
    setMinutes(minutes);
  }

  // eslint-disable-next-line
  function stop() {
    setCentiseconds(0);
    setSeconds(0);
    setMinutes(0);
  }

  return (
    <div id="watch">
      <h1>
        {minutes}:{seconds}.{centiseconds}
      </h1>
    </div>
  );
};

export default Stopwatch;
