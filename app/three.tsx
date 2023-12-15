'use client'

import * as THREE from 'three';

import React, { useEffect, useRef } from 'react';

export const createCubeScene = () => {
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  camera.position.z = 5;

  const ambientLight = new THREE.AmbientLight();
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({
    color: "black", // Cube color
    transparent: true,
    opacity: 0.5,   // Adjust opacity for translucency
  });
  const cube = new THREE.Mesh(geometry, material);

  // Adding wireframe for white border
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }); // White color for the wireframe
  const wireframe = new THREE.LineSegments(edges, lineMaterial);
  cube.add(wireframe);

  scene.add(cube);

  return { scene, camera, renderer, cube };
};