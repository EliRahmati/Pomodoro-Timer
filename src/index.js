import React, { useEffect, useRef, useState } from 'react';
import {Button} from '@mui/material';
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
      <Button variant="contained" style={{margin: 5}} onClick={handlePomodo}>Pomodoro</Button>
      <Button variant="contained" style={{margin: 5}} onClick={handleShortBreak}>Short Break</Button>
      <Button variant="contained" style={{margin: 5}} onClick={handleLongBreak}>Long Break</Button>
      <h1>Time: {Math.floor(time / 60)} min : {time % 60} seconds</h1>
      <Button variant="contained" style={{margin: 5}} onClick={handleStartTimer}>Start</Button>
      <Button variant="contained" style={{margin: 5}} onClick={handleStopTimer}>Stop</Button>
    </div>
  );
}


ReactDOM.render(
  <Pomodoro>
    <App />
  </Pomodoro>,
  document.getElementById('root')
);
