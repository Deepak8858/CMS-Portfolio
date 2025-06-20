import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="w-full py-20 flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact</h2>
      <motion.form
        className="w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow p-8 flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <motion.button
          type="submit"
          className="bg-black text-white rounded-full px-8 py-3 font-semibold shadow hover:bg-gray-800 transition"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
}