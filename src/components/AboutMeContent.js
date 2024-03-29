import React from 'react';
import '../style/AboutMeContent.css';
import CloseIcon from '../images/Closeicon.png';

const AboutMeContent = ({ onClose }) => {
  const handleClose = () => {
    onClose(); // Call onClose function passed as a prop
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
        <p>
          As a BCom graduate with a major in Information Systems, I offer a diverse skill set, blending creativity,
          strategic thinking, and a commitment to continuous improvement. Transitioning from content writing to data
          capture, my primary aspiration is to excel in software development. My creative problem-solving and audience
          engagement skills, combined with meticulous attention to detail, can add significant value to your company.
        </p>
      </div>
    </div>
  );
};

export default AboutMeContent;
