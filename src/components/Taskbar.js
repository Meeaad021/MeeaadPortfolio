import React, { useState, useEffect } from 'react';
import '../style/Taskbar.css';
import win98StartMenuImage from '../images/Win98StartMenu.webp';
import Win98Volume from '../images/Win98Volume.png';
import Tablemountainmenu from '../images/Tablemountainmenu.png';
import Meeaadheadshot from '../images/Meeaadheadshot.jpg';
import linkedinlogo from '../images/linkedinlogo.jpg';
import Resumeicon from '../images/Resumeicon.png';
import Github from '../images/Github.png';
import Aboutme from '../images/Aboutme.png';
import Container from '../components/Container';

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [aboutMeOpen, setAboutMeOpen] = useState(false); // State variable to track the About Me container

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  const toggleAboutMe = () => {
    setAboutMeOpen(!aboutMeOpen); // Toggle the state variable for About Me container
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
                <li><img src={linkedinlogo} alt="LinkedIn Logo"/><a href="https://www.linkedin.com/in/meeaadbharoochi/" target="_blank">LinkedIn</a></li>
                <li onClick={toggleAboutMe}><img src={Aboutme} alt="About me"/>About Me</li>
                <li><img src={Resumeicon} alt="Resume icon"/><a href="Resume.pdf" target="_blank">Resume</a></li>
                <li><img src={Github} alt="Github icon"/><a href="https://github.com/Meeaad021" target="_blank">Github</a></li>
                <li>Stackoverflow</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {aboutMeOpen && ( // Conditionally render the About Me container
        <Container />
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
