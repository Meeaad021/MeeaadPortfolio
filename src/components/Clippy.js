import React, { useState } from 'react';
import '../style/Clippy.css';
import Clippy from '../images/Clippy.png';

const ClippyComponent = () => {
    const [speechIndex, setSpeechIndex] = useState(0);
    const [speechTexts] = useState([
        'Hello, I am Clippy!',
        'How can I assist you today?',
        'Transitioning from content writing to data capture, and striving to soar in the realm of software development.'
    ]);

    const handleClickMe = () => {
        if (speechIndex < speechTexts.length - 1) {
            setSpeechIndex(speechIndex + 1);
        } else {
            setSpeechIndex(0);
        }
    };

    return (
        <div className="Clippy">
            <img src={Clippy} alt="Clippy" className="clippy-icon" />
            <div className="clippy-speech-bubble">
                <p>{speechTexts[speechIndex]}</p>
                <button onClick={handleClickMe} className="click-me-button">
                    Click Me
                </button>
            </div>
        </div>
    );
};

export default ClippyComponent;
