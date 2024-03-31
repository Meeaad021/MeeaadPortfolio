import React, { useState } from 'react';
import '../style/Desktop.css';
import Taskbar from '../components/Taskbar';
import Mycomputer from '../images/Mycomputer.png';
import Edge from '../images/Edge.png';
import CloseIcon from '../images/Closeicon.png';
import Python from '../images/Python.png';
import Javascript from '../images/Javascript.png';
import Typescript from '../images/Typescript.png';
import SQL from '../images/SQL.png';
import C from '../images/C.png';
import Clippy from '../images/Clippy.png';

const Desktop = () => {
  const [showMyComputer, setShowMyComputer] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showClippy, setShowClippy] = useState(false);

  const toggleMyComputer = () => {
    setShowMyComputer(!showMyComputer);
  };

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  const toggleClippy = () => {
    setShowClippy(!showClippy);
  };

  return (
    <div className="desktop-container">
      <div className="my-computer" onClick={toggleMyComputer}>
        <img src={Mycomputer} alt="My Computer" className="my-computer-icon" />
        <span className="my-computer-text">My Computer</span>
      </div>
      <div className="skills" onClick={toggleSkills}>
        <img src={Edge} alt="Edge" className="Edge-icon" />
        <span className="skills-text">Skills</span>
      </div>
      <div className="clippy" onClick={toggleClippy}>
        <img src={Clippy} alt="Clippy" className="clippy-icon" />
      </div>
      {showMyComputer && (
        <div className="my-computer-window">
          <div className="title-bar">
            <div className="title-bar-text">My Computer</div>
            <div className="title-bar-controls">
              <button aria-label="Close" onClick={toggleMyComputer} className="windows-button">
                <img src={CloseIcon} alt="Close" />
              </button>
            </div>
          </div>
          <div className="my-computer-content">
            <div>
              <p>
                This is the content of My Computer.
              </p>
            </div>
          </div>
        </div>
      )}
      {showSkills && (
        <div className="skills-window">
          <div className="title-bar">
            <div className="title-bar-text">Skills</div>
            <div className="title-bar-controls">
              <button aria-label="Close" onClick={toggleSkills} className="windows-button">
                <img src={CloseIcon} alt="Close" />
              </button>
            </div>
          </div>
          <div className="skills-content">
            <div className="skills-container">
              <div className="Python">
                <img src={Python} alt="Python" className="Python-icon" />
                <span className="Python-text">Python</span>
              </div>
              <div className="Javascript">
                <img src={Javascript} alt="Javascript" className="Javascript-icon" />
                <span className="Javascript-text">JavaScript</span>
              </div>
              <div className="Typescript">
                <img src={Typescript} alt="Typescript" className="Typescript-icon" />
                <span className="Typescript-text">TypeScript</span>
              </div>
              <div className="SQL">
                <img src={SQL} alt="SQL" className="SQL-icon" />
                <span className="SQL-text">SQL</span>
              </div>
              <div className="CSharp">
                <img src={C} alt="C#" className="CSharp-icon" />
                <span className="CSharp-text">C#</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {showClippy && (
        <div className="clippy-window">
          <div className="title-bar">
            <div className="title-bar-text">Clippy</div>
            <div className="title-bar-controls">
              <button aria-label="Close" onClick={toggleClippy} className="windows-button">
                <img src={CloseIcon} alt="Close" />
              </button>
            </div>
          </div>
          <div className="clippy-content">
            <div>
              <p>
                This is the content of Clippy.
              </p>
            </div>
          </div>
        </div>
      )}
      <Taskbar />
    </div>
  );
};

export default Desktop;
