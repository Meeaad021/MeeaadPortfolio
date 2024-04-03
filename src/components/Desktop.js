import React, { useState } from 'react';
import '../style/Desktop.css';
import Taskbar from '../components/Taskbar';
import Skills from '../components/Skills';
import ClippyComponent from '../components/Clippy';
import Mycomputer from '../images/Mycomputer.png';
import Edge from '../images/Edge.png';
import CloseIcon from '../images/Closeicon.png';

const Desktop = () => {
    const [showMyComputer, setShowMyComputer] = useState(false);
    const [showSkills, setShowSkills] = useState(false);

    const toggleMyComputer = () => {
        setShowMyComputer(!showMyComputer);
    };

    const toggleSkills = () => {
        setShowSkills(!showSkills);
    };

    return (
        <div className="desktop-container">
            <div className="my-computer" onClick={toggleMyComputer}>
                <img src={Mycomputer} alt="My Computer" className="my-computer-icon" />
                <span className="my-computer-text">My Computer</span>
            </div>
            <div className="skills-icon" onClick={toggleSkills}>
                <img src={Edge} alt="Edge" className="Edge-icon" />
                <span className="skills-text">Skills</span>
            </div>
            <div className="clippy-container">
                <ClippyComponent />
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
                            <p>This is the content of My Computer.</p>
                        </div>
                    </div>
                </div>
            )}
            {showSkills && <Skills toggleSkills={toggleSkills} />}
            <Taskbar />
        </div>
    );
};

export default Desktop;
