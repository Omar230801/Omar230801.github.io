import React, { useEffect } from "react";
import './Intro.css';

function Intro({ onFinish }) {

  useEffect(() => {
    // Durata dell'animazione: 2 secondi
    const timer = setTimeout(() => onFinish(), 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="intro-container">
      <img src="/assets/logo.png" alt="Logo" className="logo" />
    </div>
  );
}

export default Intro;
