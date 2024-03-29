import React, { useState, useEffect } from 'react';
import '../style/App.css';
import Desktop from '../components/Desktop';

const App = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.ctrlKey) {

        if (event.deltaY > 0) {

          setZoomLevel((prevZoomLevel) => Math.max(0.1, prevZoomLevel - 0.1));
        } else if (event.deltaY < 0) {

          setZoomLevel((prevZoomLevel) => prevZoomLevel + 0.1);
        }
      }
    };

    window.addEventListener('wheel', handleScroll); 
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []); 

  return (
    <div style={{ transform: `scale(${zoomLevel})` }}>
      <Desktop />
    </div>
  );
};

export default App;
