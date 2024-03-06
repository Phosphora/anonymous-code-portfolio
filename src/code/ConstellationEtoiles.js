import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ConstellationEtoiles() {
  const container = useRef();
  let scene, camera, renderer;
  let mouseX = 0,
    mouseY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  useEffect(() => {
    init();
    animate();

    return () => {
      if (container.current && container.current.removeChild) {
        container.current.removeChild(renderer.domElement);
      }
    };    
  }, );

  function init() {
    const { innerWidth, innerHeight } = window;

    camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 1000);
    camera.position.z = 500;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0003);

    starForge();

    if (webGLSupport()) {
      renderer = new THREE.WebGLRenderer({ alpha: true });
    } else {
      renderer = new THREE.WebGLRenderer();
    }

    renderer.setClearColor(0x000011, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(innerWidth, innerHeight);
    container.current.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onMouseMove, false);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    camera.position.x += (mouseX - camera.position.x) * 0.005;
    camera.position.y += (-mouseY - camera.position.y) * 0.005;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }

  function webGLSupport() {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch (e) {
      return false;
    }
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function starForge() {
    const starQty = 45000;
    const geometry = new THREE.BufferGeometry();
    const materialOptions = {
      size: 1.0,
      transparent: true,
      opacity: 0.7,
    };
    const starStuff = new THREE.PointsMaterial(materialOptions);

    const vertices = [];

    for (let i = 0; i < starQty; i++) {
      const starVertex = new THREE.Vector3();
      starVertex.x = Math.random() * 2000 - 1000;
      starVertex.y = Math.random() * 2000 - 1000;
      starVertex.z = Math.random() * 2000 - 1000;
      vertices.push(starVertex.x, starVertex.y, starVertex.z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const stars = new THREE.Points(geometry, starStuff);
    scene.add(stars);
  }

  function onMouseMove(e) {
    mouseX = e.clientX - windowHalfX;
    mouseY = e.clientY - windowHalfY;
  }

  return <div ref={container} />;
}