'use client'

import '.././globals.css'

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from 'react';

import Home from '.././page';
import HtmlCanvas from '.././htmlCanvas';
import Image from 'next/image';
import React from 'react';
import logo1 from ".././thelettern.png";

interface NavbarProps {
  sectionIds: string[];
}

const Navbar: React.FC<NavbarProps> = ({ sectionIds }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  const { updateNavbarColor } = HtmlCanvas();

  useEffect(() => {
    const handleScroll = () => {
      // Call updateNavbarColor with the ID of the element below the navbar
      updateNavbarColor('element-below-navbar');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, );

    return (
        <div className='navbar'>
          {/* <div className="navbar bg-opacity-50 bg-white backdrop-blur-md backdrop-filter backdrop-saturate-150 p-2"> */}
            {/* <div className="navbar bg-base-100"> */}
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <ul className="p-2">
                      </ul>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="noPointer">
                    <div onClick={scrollToTop}>
                      <Image src={logo1} alt="Logo" width={60} height={60}  />  
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li> 
                    <ScrollLink className="push" to="section1" smooth={true} duration={500}>
                        About Me 
                    </ScrollLink>
                </li>
                <li> 
                    <ScrollLink className="push" to="section2" smooth={true} duration={500}>
                        Experience 
                    </ScrollLink>
                </li>
                  <li>
                    <ScrollLink className="push" to="section2" smooth={true} duration={500}>
                        Contact Me
                    </ScrollLink>
                  </li>
                </ul>
              </div>
              <div className="navbar-end">
        </div>  
      </div>
    );
  };
  
  export default Navbar;
  