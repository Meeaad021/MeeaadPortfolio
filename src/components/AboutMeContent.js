import React, { useState } from 'react';
import '../style/AboutMeContent.css';
import CloseIcon from '../images/Closeicon.png';
import Aboutmegradpic from '../images/Aboutmegradpic.jpg';


const AboutMeContent = ({ onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handleClose = () => {
    onClose();
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  return (
    <div className="about-me-container">
      <div className="title-bar">
        <div className="title-bar-text">About Me</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={handleClose} className="windows-button">
            <img src={CloseIcon} alt="Close" />
          </button>
        </div>
      </div>
      <div className="about-me-content">
        <div className={`page${currentPage}`}>
          {currentPage === 1 && (
            <div>
              <p>
                As a BCom graduate with a major in Information Systems, I offer a diverse skill set, blending creativity,
                strategic thinking, and a commitment to continuous improvement. Transitioning from content writing to data
                capture, my primary aspiration is to excel in software development. My creative problem-solving and audience
                engagement skills, combined with meticulous attention to detail, can add significant value to your company.
              </p>
            <img src={Aboutmegradpic} alt="Aboutmegradpic" className="Aboutmegradpic"/>
                        </div>
          )}
          {currentPage === 2 && (
            <div>
              <p>
                                     SKILLS
              <ul>
              <li>Languages: Python, JavaScript, TypeScript, SQL, C#</li>
              <li>Framework: React, Vue.js</li>
              <li>Environments: VS Code, PyCharm, Sublime Text</li>
              <li>Tools: Selenium, Panda, MySQL, Microsoft Excel, VBA, Microsoft Powerquery</li>
              </ul>
              </p>
            </div>
          )}
          {currentPage === 3 && (
            <div>
              <p>
              Projects
              <ul>
               <li>C# Project</li>
               <li>ETL Project</li>
               <li>Personal Website</li>
               <li>Potential Databook App</li>
               <li>Calculator</li>
              </ul>
              </p>
            </div>
          )}
        </div>
      </div>
      <button className="btn" onClick={nextPage}>Next Page</button>
    </div>
  );
};

export default AboutMeContent;
