import React, { useState } from 'react';
import '../style/Clippy.css';
import Clippy from '../images/Clippy.png';

const ClippyComponent = () => {
    const [showClippy, setShowClippy] = useState(false);
    const [speechIndex, setSpeechIndex] = useState(0);
    const [speechTexts, setSpeechTexts] = useState([
        'Hello, I am Clippy!',
        'How can I assist you today?',
        'Need help with anything?'
    ]);

    const toggleClippy = () => {
        setShowClippy(!showClippy);
    };

    const handleClickMe = () => {
        if (speechIndex < speechTexts.length - 1) {
            setSpeechIndex(speechIndex + 1);
        } else {
            setSpeechIndex(0);
        }
    };

    return (
        <div className="Clippy" onClick={toggleClippy}>
            <img src={Clippy} alt="Clippy" className="clippy-icon" />
            {showClippy && (
                <div className="clippy-window">
                    <div className="clippy-content">
                        <div>
                            <p>{speechTexts[speechIndex]}</p>
                            <button onClick={handleClickMe} className="click-me-button">
                                Click Me
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClippyComponent;
