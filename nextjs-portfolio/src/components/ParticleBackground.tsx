"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 1000;

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Generate random positions for particles
  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  // Animate particles to react to mouse movement
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = mouse.current.x * 0.2;
      pointsRef.current.rotation.x = mouse.current.y * 0.2;
    }
  });

  // Listen for mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={"#6366f1"} // Tailwind indigo-500, adjust to match your UI
        size={0.07}
        transparent
        opacity={0.7}
      />
    </points>
  );
}

const ParticleBackground: React.FC = () => (
  <div className="fixed inset-0 -z-10 w-full h-full">
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Particles />
    </Canvas>
  </div>
);

export default ParticleBackground;
