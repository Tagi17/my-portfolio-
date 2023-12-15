'use client'

import React, { useEffect, useRef } from 'react';

import { createCubeScene } from './three';

const KubeComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Specify the ref type

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const { scene, camera, renderer, cube } = createCubeScene();
    container.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (container) {
        container.removeChild(renderer.domElement);
      }
      // Additional cleanup for THREE.js objects
      cube.geometry.dispose();
      if (Array.isArray(cube.material)) {
        cube.material.forEach(mat => mat.dispose());
      } else {
        cube.material.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default KubeComponent;