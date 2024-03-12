import React, { useState, useEffect } from 'react';
import '../style/Taskbar.css';
import win98StartMenuImage from '../images/Win98StartMenu.webp';
import Win98Volume from '../images/Win98Volume.png';

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

  return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="taskbar">
      <button className="button-start-menu">
        <img src={win98StartMenuImage} alt="Start Menu Icon" />
        Start
      </button>
      <div className="taskbar-divider"></div>
      <div className="tasks">
        <img src={Win98Volume} alt="Volume Icon" className="small-image volume-icon" />/>
        <div className="taskbar-time">
          {currentTime.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;