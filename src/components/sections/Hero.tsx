import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-24 gap-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold tracking-tight text-center text-gray-900 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
      >
        Hi, I'm John Doe<br />
        <span className="text-gray-500 font-normal">A Modern Minimal Portfolio</span>
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 max-w-xl text-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
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
    </motion.section>
  );
}