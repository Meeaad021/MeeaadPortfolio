import React, { useState } from 'react';
import '../style/Clippy.css';
import Clippy from '../images/Clippy.png';

const ClippyComponent = () => {
    const [speechIndex, setSpeechIndex] = useState(0);
    const [speechTexts] = useState([
        'Hello, I am Clippy!',
        'Click here for a few fun facts about Meeaad.',
        'Meeaad enjoys travelling and has been to over 15 countries all over the world.',
        'Caught his first fish in 2023 (Roughly 10-15cm).',
        'Recently started hitting the driving range and is eager to do a full 18 hole course.',

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
