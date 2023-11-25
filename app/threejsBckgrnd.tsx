'use client'

import './globals.css'

import * as THREE from 'three';

import React, { useEffect } from 'react';

const Cube: React.FC = () => {

    useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg') as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight );
    camera.position.setZ(12);

    renderer.render(scene, camera);

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true });
    const cube = new THREE.Mesh( geometry, material );

    scene.add(cube)
    const pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set(1,1,1)

    function animate(){
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.005;
        cube.rotation.z += 0.01;
        
        renderer.render(scene,camera);
    };
        animate();
    }, []);
    return <canvas id="bg" style={{ maxHeight: "100vh", overflow: "hidden" }}></canvas>;
};
export default Cube;