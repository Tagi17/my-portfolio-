'use client'

import './globals.css'

import { BoxGeometry, Group, Mesh, MeshStandardMaterial } from 'three'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web'
import { motion, useScroll, useTransform } from 'framer-motion';

import { Box } from '@radix-ui/themes'
import ContactFormComponentFunc from './contactForm';
import Cube from './threejs'
import ExpCards from './exp';
import HashCards from './hashCards';
import Image from 'next/image';
import KubeComponent from './kubeComponent';
import Navbar from './components/Navbar'
import ParallaxContext from './parallaxContext'
import WaveSVG from './waveSVG';
import dynamic from 'next/dynamic';
import { extend } from '@react-three/fiber'
import handPic from './HANDSOFNODES.png'

const HashCardsComponent = dynamic(() => import('./hashCards'), { ssr: false });
const KubeComponentC = dynamic(() => import('./kubeComponent'), { ssr: false });
const CubeComponent = dynamic(() => import('./threejs'), { ssr: false });
const WaveSVGComponent = dynamic(() => import('./waveSVG'), { ssr: false });
const ExpCardsComponent = dynamic(() => import('./exp'), { ssr: false });
const ContactFormComponent = dynamic(() => import('./contactForm'), { ssr: false });

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const ref = useRef();
  const contactFormRef = useRef<HTMLDivElement>(null);
  

  const parallaxRef = useRef<any>(null);
  const scrollToSection = (offset: number) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
  };

  const { scrollYProgress } = useScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scaleRange = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const yRangeCards = useTransform(scrollYProgress, [0, 1], [1500, 200]); 
  const yRangeText = useTransform(scrollYProgress, [0, 1], [1000, 50]); 
  const yRangeHands = useTransform(scrollYProgress, [0, 1], [1, -1000]); // Moves faster downwards
  const yRangeAbout = useTransform(scrollYProgress, [0, 1], [1, -400]); 
  
  return (
    <>
      <div>
        <div className="main-container">
          <motion.div className="text-3d" style={{ y: yRangeCards }}>
              <div>
                <HashCardsComponent/>
              </div>
            </motion.div>
              <motion.div className="text-3d" style={{ y: yRangeText }}>
                  <div className="home">
                      Blockchain Enthusiast  
                    </div>
              </motion.div>
              <motion.div layout initial={{ y: 0 }} style={{ y: yRangeHands }}>
                <div className="hands">
                    <Image src={handPic} alt="hand of god"/>  
                </div>
              </motion.div>
                <motion.div style={{ y: yRangeAbout }}>
                <div className="float" id="section1">
                  <div className="about">
                  My passion lies in designing and creating purposeful <br />
                  products that enhance user experience. I was introduced to <br />
                  the world of programming through Girls Who Code, which <br />
                  piqued my interest in the field. However, I was uncertain <br />
                  about which industry I wanted to specialize in until I <br />
                  discovered Bitcoin. The technology behind it fascinated me <br />
                  and opened up a new world of possibilities that I am eager  <br />
                  to explore. 
                  </div>
                </div>
                </motion.div>
                <div className="section" id="section2">
                  <div className="experience">
                  <ExpCardsComponent/>
                  </div>
                </div>
                  <div id="section3">
                  <div className="contact">
                    {!showContactForm && ( // Render the button only if showContactForm is false
                      <div
                        className="contact-trigger hoverable"
                        onClick={() => {
                          setShowContactForm(true); // Show the contact form
                          setTimeout(() => {
                            if (contactFormRef.current) {
                              contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        }}
                      >
                        Contact Me
                      </div>
                    )}
                    {showContactForm && <ContactFormComponent ref={contactFormRef} />}
                  </div>
                  </div>
                </div>
        </div>
    </>
  );
};

export default Home;
