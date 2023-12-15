'use client'

import './globals.css'

import React, {useEffect} from 'react';

const ScrollBar: React.FC = () => {
    
    useEffect(() => {
        const handleScroll = () => {
            document.body.classList.add('scroll-active');
        };
        const handleMouseMove = (e: MouseEvent) => {
            if (window.innerWidth - e.clientX < 20) {
                document.body.classList.add('scroll-active');
            }
        };
        document.addEventListener('scroll', handleScroll);
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
       <div>
        
       </div>
    );
};
export default ScrollBar;