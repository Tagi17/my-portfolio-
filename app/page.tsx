'use client'

import './globals.css'

import { BoxGeometry, Group, Mesh, MeshStandardMaterial } from 'three'

import { Box } from '@radix-ui/themes'
import Cube from './threejs'
import HashCards from './hashCards';
import KubeComponent from './kubeComponent';
import dynamic from 'next/dynamic';
import { extend } from '@react-three/fiber'

const Home = () => {
  return (
    <>
    <div>
      <div className="main-container">
        <div>
          <HashCards/>
        </div>
        <div className="cube-container">
          <Cube/>
          <KubeComponent/>
        </div>
        <div id="centered-text">
          <div id="section0">
            <div className="home">
                Blockchian Enthusiast  
            </div>
          </div>
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
          <div id="section2">
            <div className="articles">
                Articles 
            </div>
          </div>
            <div id="section3">
              <div className="contact">
                Reach out to me at inzhagey@gmail.com 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
