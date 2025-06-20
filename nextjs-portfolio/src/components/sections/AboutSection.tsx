'use client';
import { useEffect, useState } from 'react';
import { sanity } from '../../lib/sanityClient';
import { urlFor } from '../../lib/sanityImage';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const [about, setAbout] = useState<any>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      const data = await sanity.fetch(`*[_type == "about"][0]`);
      setAbout(data);
    };
    fetchAbout();
  }, []);

  return (
    <motion.section
      id="about"
      className="w-full py-20 flex flex-col items-center bg-[#F8F8F8]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold mb-8 text-[#18181B]">About</h2>
      <div className="max-w-2xl text-center text-[#71717A] text-lg leading-relaxed">
        {about?.bio}
      </div>
      {about?.profileImage && (
        <motion.img
          src={urlFor(about.profileImage).width(256).height(256).url()}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mt-8 object-cover border-4 border-white shadow"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      )}
    </motion.section>
  );
}
