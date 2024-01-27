'use client'

import '.././globals.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { MutableRefObject, RefObject, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { animated, useSpring } from '@react-spring/web'

import Home from '.././page';
import Image from 'next/image';
import ParallaxContext from './../parallaxContext'
import logo1 from ".././thelettern.png";

interface Section {
  id: string;
  name: string;
}
interface NavbarProps {
  sectionIds: Section[];
  // parallaxRef: MutableRefObject<HTMLDivElement>;
  // scrollToSection: (offset: number) => void;
}
const sectionIds = [
  { id: 'section1', className:"section", name: 'About Me' },
  { id: 'section2', className:"section", name: 'Experience' },
  { id: 'section3', className:"section", name: 'Contact Me' },
];

const Navbar: React.FC<NavbarProps> = ({ sectionIds }) => {
  const parallaxRef = useContext(ParallaxContext).parallaxRef as React.MutableRefObject<any>;
  console.log("Section IDs", sectionIds); 

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  // const handleNavClick = (id: string) => {
  //   const sectionIndex = sectionIds.findIndex(section => section.id === id);
  //   const offset = sectionIndex;  // Assuming each section is one "page"
  //   console.log(`scrolling to section${id} at index ${sectionIndex} with offset ${offset}`);
  //   if (parallaxRef.current) {
  //     console.log("Parallax ref is defined calling scrollTo");
  //     console.log('scrollTo function exists:', typeof parallaxRef.current.scrollTo === 'function');
  //     parallaxRef.current.scrollTo(offset);
  //   }
  // };
  
    return (
      <div
        className={`navbar-glass sticky top-0 z-[99999]`}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
      >
          <div>
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* <!-- Mobile menu button--> */}
                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open menu</span>
                </button>
              </div>
              <div className="ml-4 sm:items-stretch sm:justify-start">
                <div className=" items-start">
                  <Image className="h-14 w-auto" src={logo1} width={100} height={100} alt="Your Company"/>
                </div>
              </div>
              <div className="hidden sm:block place-content-center ">
                  <div className="flex  ">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-5 py-2 text-lg font-large">Dashboard</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-5 py-2 text-lg font-large">Team</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-5 py-2 text-lg font-large">Projects</a>
                    {/* <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-large">Calendar</a> */}
                  </div>
                </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative ml-3">
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
            </div>
          </div>
      </div>
    );
  };
  
  export default Navbar;
  