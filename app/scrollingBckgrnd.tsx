'use client'

import './globals.css'

import React, { useEffect, useState } from 'react';

const ScrollingBackground = () => {
  console.log("ScrollingBackground component mounted");
  const [background, setBackground] = useState('initial-gradient');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newBackground = scrollPosition > window.innerHeight 
        ? 'second-gradient' 
        : 'initial-gradient';

      setBackground(newBackground);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`background ${background}`}>
    </div>
  );
};

export default ScrollingBackground;
