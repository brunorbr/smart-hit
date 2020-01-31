import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function tick() {
    if (seconds !== 59) {
      setSeconds(seconds + 1);
    } else {
      setSeconds(0);
      setMinutes(minutes + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <h1>
        {minutes}:{seconds}
      </h1>
    </div>
  );
};

export default Timer;
