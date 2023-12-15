// 'use client'

// import './globals.css'

// import * as THREE from 'three';

// import React, { useEffect, useRef } from 'react';

// const Cube: React.FC = () => {
//     const canvasRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight );

//     const canvasContainer = canvasRef.current;
//     if (canvasContainer) {
//         canvasContainer.appendChild(renderer.domElement);
//     }

//     const geometry = new THREE.BoxGeometry(1, 1, 1)
//     const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true });
//     const cube = new THREE.Mesh( geometry, material );
    
//     scene.add(cube)
//     camera.position.setZ(12);
//     camera.position.set(0, 0, 5);
   
//     const pointLight = new THREE.PointLight(0xffffff)
//     pointLight.position.set(1,1,1)
//     scene.add(pointLight);

//     renderer.render(scene, camera);

//     function animate(){
//         requestAnimationFrame(animate);
//         cube.rotation.x += 0.01;
//         cube.rotation.y += 0.005;
//         cube.rotation.z += 0.01;
        
//         renderer.render(scene,camera);
//     };
//         animate();
//         return () => {
//             if (canvasContainer) {
//               canvasContainer.removeChild(renderer.domElement);
//             }
//           };
//     }, []);
//     return <div ref={canvasRef} style={{ width: '100vw', height: '100vh', position: 'fixed', zIndex: -1 }} />;
// };
// export default Cube;