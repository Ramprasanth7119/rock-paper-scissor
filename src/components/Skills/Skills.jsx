import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';
import gsap from 'gsap';

function SparkleTrail({ position }) {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const createSparkles = () => {
      const newParticles = [];
      for (let i = 0; i < 100; i++) {
        const particle = {
          position: new Vector3(position.x, position.y, position.z),
          velocity: new Vector3(
            (Math.random() - 0.5) * 2,
            Math.random() * 3,
            (Math.random() - 0.5) * 2
          ),
        };
        newParticles.push(particle);
      }
      setParticles(newParticles);
    };

    createSparkles();
  }, [position]);

  useEffect(() => {
    if (particles.length === 0) return;

    particles.forEach((particle, index) => {
      gsap.to(particle.position, {
        x: "+=1",
        y: "+=1",
        z: "+=1",
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.05 * index, // stagger animation by index
      });
    });
  }, [particles]);

  return (
    <>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          {/* Change color and emissive to black */}
          <meshStandardMaterial color="black" emissive="black" />
        </mesh>
      ))}
    </>
  );
}

function Skills() {
  const [position, setPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setPosition([x * 5, y * 5, 0]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <SparkleTrail position={new Vector3(...position)} />
      <OrbitControls />
    </Canvas>
  );
}

export default Skills;
