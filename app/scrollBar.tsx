'use client'

import './globals.css'

import React, {useEffect} from 'react';

const ScrollBar = () => {
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (typeof window !== 'undefined' && window.innerWidth - e.clientX < 20) {
          document.body.classList.add('scroll-active');
        }
      };
  
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    return <div></div>;
  };
export default ScrollBar;