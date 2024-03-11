import React from 'react';
import '../style/Taskbar.css';
import win98StartMenuImage from '../images/Win98StartMenu.webp';

const Taskbar = () => {
  return (
    <div className="taskbar">
      <button className="button-start-menu">
        <img src={win98StartMenuImage} alt="Start Menu Icon" />
        Start
      </button>
      <div className="tasks"></div>
      <div className="taskbar-divider"></div>
      <div className="taskbar-time">
        <div className="tray-icons"></div>
      </div>
    </div>
  );
};

export default Taskbar;
