import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Pomodoro(props) {
  const [timerId, setTimerId] = useState(null);
  const [time, setTime] = useState(25 * 60);

  const handlePomodo = () => {
    setTime(25 * 60)
  };

  const handleShortBreak = () => {
    setTime(5 * 60)
  };

  const handleLongBreak = () => {
    setTime(15 * 60)
  };

  const handleStartTimer = () => {
    if (!timerId) {
      const id = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      setTimerId(id);
    }
  };

  const handleStopTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  useEffect(() => {
    if (time === 0) {
      handleStopTimer()
      alert("Ding Ding Ding ...")
    }
  }, [time])

  return (
    <div>
      <button onClick={handlePomodo}>Pomodoro</button>
      <button onClick={handleShortBreak}>Short Break</button>
      <button onClick={handleLongBreak}>Long Break</button>
      <p>Time: {Math.floor(time / 60)} min : {time % 60} seconds</p>
      <button onClick={handleStartTimer}>Start</button>
      <button onClick={handleStopTimer}>Stop</button>
    </div>
  );
}


ReactDOM.render(
  <Pomodoro>
    <App />
  </Pomodoro>,
  document.getElementById('root')
);
