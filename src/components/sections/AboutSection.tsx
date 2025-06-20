import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="w-full py-20 flex flex-col items-center bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-900">About</h2>
      <div className="max-w-2xl text-center text-gray-700 text-lg leading-relaxed">
        I'm John Doe, a passionate web developer and designer focused on building modern, minimal, and high-performance web experiences. I love working with React, Next.js, and 3D graphics, and I'm always exploring new technologies to push the boundaries of what's possible on the web.
      </div>
    </motion.section>
  );
}