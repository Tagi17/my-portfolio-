'use client'

import './globals.css'

import { BoxGeometry, Group, Mesh, MeshStandardMaterial } from 'three'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web'

import { Box } from '@radix-ui/themes'
import ContactForm from './contactForm';
import Cube from './threejs'
import ExpCards from './exp';
import HashCards from './hashCards';
import Image from 'next/image';
import KubeComponent from './kubeComponent';
import WaveSVG from './waveSVG';
import dynamic from 'next/dynamic';
import { extend } from '@react-three/fiber'
import handPic from './HANDSOFNODES.png'
import textAnimation from './textAnimation';

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
  useEffect(() => {
    const observer = textAnimation();

    return () => {
      if (observer) {
        observer.disconnect();
      }
  };
}, []);
  return (
    <>
    <div>
      <div className="main-container">
        <Parallax pages={7} style={{ top: '0', left: '0' }}>
          <ParallaxLayer offset={0} speed={0.5} style={{ position: 'relative', height: '100vh' }} >
            <div className="content">
              <HashCardsComponent/>
            </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={0.5} sticky={{ start: 0.5, end: 0.65 }} >
            <div className="centered-text">
              <div className="text-3d">
                <div className="home">
                    Blockchain Enthusiast  
                  </div>
              </div>
            </div>
            </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={1} 
            style={{
            backgroundImage: `url(${handPic})`,
            backgroundSize: 'auto, auto',
            position: 'relative',
            zIndex: 1,
          }}>
            <div className="hands">
                <Image src={handPic} alt="hand of god"/>  
            </div>
           </ParallaxLayer> 
           <ParallaxLayer offset={0.5} speed={0.5} style={{ position: 'relative' }}>
            <div className="cube-container">
              <CubeComponent/>
              <KubeComponentC/>
            </div>
            </ParallaxLayer>
            <div id="centered-text">
              <div id="section0">
                <div className="wave-container" style={{ zIndex: -1 }}>
                  <WaveSVGComponent />
                </div>
              </div>
              <ParallaxLayer offset={0.5} speed={0.5} style={{ position: 'relative', zIndex: 10 }}>
              <div id="section1">
                <div className="about">
                My passion lies in designing and creating purposeful <br />
                products that enhance user experience. I was introduced to <br />
                the world of programming through Girls Who Code, which <br />
                piqued my interest in the field. However, I was uncertain <br />
                about which industry I wanted to specialize in until I <br />
                discovered Bitcoin. The technology behind it fascinated me <br />
                and opened up a new world of possibilities that I am eager <br />
                to explore. 
                </div>
              </div>
              </ParallaxLayer>
              <ParallaxLayer offset={0.3} speed={0.3} factor={1.5} style={{ position: 'relative' }}>
              <div id="section2">
                <div className="experience">
                <ExpCardsComponent/>
                </div>
              </div>
              </ParallaxLayer>
              <ParallaxLayer offset={0.5} speed={0.5} style={{ position: 'relative' }}>
                <div id="section3">
                  <div className="contact">
                  <div
                      className={`contact-trigger ${showContactForm ? '' : 'hoverable'}`}
                      onClick={() => setShowContactForm(!showContactForm)}
                    >
                      Contact Me
                    </div>
                    {showContactForm && <ContactFormComponent />}
                  </div>
                </div>
                </ParallaxLayer>
              </div>
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default Home;
