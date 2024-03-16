import React, { useState, useEffect } from 'react';
import '../style/Taskbar.css';
import win98StartMenuImage from '../images/Win98StartMenu.webp';
import Win98Volume from '../images/Win98Volume.png';
import Tablemountainmenu from '../images/Tablemountainmenu.png';



const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="taskbar">
      <button className="button-start-menu" onClick={toggleStartMenu}>
        <img src={win98StartMenuImage} alt="Start Menu Icon" /> Start
      </button>
      {startMenuOpen && (
        <div className="menu">
        <img src={Tablemountainmenu} className="Tablemountainmenu" style={{ width: '109px', height: '299px' }} />          <ul>
            <li>LinkedIn</li>
            <li>Github</li>
            <li>Resume</li>
            <li>Stackoverflow</li>
          </ul>
        </div>
      )}
      <div className="taskbar-divider"></div>
      <div className="tasks">
        <img src={Win98Volume} alt="Volume Icon" className="small-image volume-icon" />
        <div className="taskbar-time">
          {currentTime.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
