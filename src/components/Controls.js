import React from "react";

const Controls = level => {
  const startButton = (
    <button className={level} id="start-btn">
      ‎⏵
    </button>
  );

  const pauseButton = (
    <button className={level} id="pause-btn">
      ⏸
    </button>
  );

  const stopButton = (
    <button className={level} id="stop-btn">
      ⏹
    </button>
  );
};
