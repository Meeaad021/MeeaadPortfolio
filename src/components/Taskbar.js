import React, { useState, useEffect } from 'react';
import '../style/Taskbar.css';
import win98StartMenuImage from '../images/Win98StartMenu.webp';
import Win98Volume from '../images/Win98Volume.png';
import Tablemountainmenu from '../images/Tablemountainmenu.png';
import Meeaadheadshot from '../images/Meeaadheadshot.jpg';
import linkedinlogo from '../images/linkedinlogo.jpg';


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
        <div className="menubanner">
                <img src={Tablemountainmenu} alt="Table mountain menu" className="Tablemountainmenu-icon"/>
        <div className="menuheadshot">
                <img src={Meeaadheadshot} alt="Meeaadheadshot" className="Meeaadheadshot"/>
        
        <div className="menu">
        <ul>
            <li><img src={linkedinlogo} alt="LinkedIn Logo"/> <a href="https://www.linkedin.com/in/meeaadbharoochi/">LinkedIn</a></li>
            <li>About Me</li>
            <li>Resume</li>
            <li>Github</li>
            <li>Stackoverflow</li>
        </ul>
        </div>
        </div>
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
