import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedWaveSVG() {
  return (
    <motion.svg
      className="absolute left-0 right-0 top-0 w-full h-32 z-0"
      viewBox="0 0 1440 320"
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        fill="#6366f1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </motion.svg>
  );
}