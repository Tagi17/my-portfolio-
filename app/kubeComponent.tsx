'use client'

import React, { useEffect, useRef } from "react";
import { camera, cube, renderer, scene } from "./three";

const KubeComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.appendChild(renderer.domElement);
    }

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      cube.update();
    }

    animate();

    return () => {
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default KubeComponent;
