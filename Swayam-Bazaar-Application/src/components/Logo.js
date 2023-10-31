import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import logoImage from "../components/images/Logo_.png" // Replace with the path to your custom image

const Logo = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(200, 50);
    renderer.setClearColor(0xffffff);
    camera.position.z = 5;

    // Create a custom geometry for your logo (you may need to adjust the dimensions)
    const geometry = new THREE.BoxGeometry(4, 4, 4);

    // Load your custom image as a texture
    const texture = new THREE.TextureLoader().load(logoImage);
    const material = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  const handleSaveImage = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'Logo_.png';
    link.click();
  };

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <button onClick={handleSaveImage}></button>
    </div>
  );
};

export default Logo;
