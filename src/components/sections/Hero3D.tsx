'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
uniform float uTime;
void main() {
  float wave = sin(10.0 * vUv.x + uTime) * 0.1;
  vec3 color = mix(vec3(0.39,0.44,0.95), vec3(0.95,0.96,1.0), vUv.y + wave);
  gl_FragColor = vec4(color, 1.0);
}
`;

function ShaderSphere() {
  const mesh = useRef(null);
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
        },
      }),
    []
  );
  useFrame(({ clock }) => {
    material.uniforms.uTime.value = clock.getElapsedTime();
  });
  return (
    <mesh ref={mesh} castShadow receiveShadow material={material}>
      <sphereGeometry args={[1.2, 64, 64]} />
    </mesh>
  );
}

function ParticleField() {
  return <Sparkles count={200} scale={[8, 8, 8]} size={2} color="#a5b4fc" speed={0.7} />;
}

export default function Hero3D() {
  return (
    <motion.div
      className="w-full flex flex-col items-center justify-center py-12 relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 4] }} shadows>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <ShaderSphere />
          <Stars radius={10} depth={50} count={2000} factor={4} fade speed={2} />
          <ParticleField />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
      <motion.div
        className="relative z-10 w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg bg-transparent flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold tracking-tight text-center text-gray-900 leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
        >
          Hi, I'm John Doe
          <br />
          <span className="text-gray-500 font-normal">A Modern Minimal Portfolio</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-xl text-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
        >
          I design and build beautiful web experiences. Explore my work below.
        </motion.p>
        <motion.a
          href="#work"
          className="mt-8 px-8 py-3 bg-black text-white rounded-full font-semibold shadow hover:bg-gray-800 transition"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          View Work
        </motion.a>
      </motion.div>
    </motion.div>
  );
}