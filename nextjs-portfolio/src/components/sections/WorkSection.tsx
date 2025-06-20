'use client';
import { useEffect, useState } from 'react';
import { sanity } from '../../lib/sanityClient';
import { urlFor } from '../../lib/sanityImage';
import ProjectCard from '../ProjectCard';
import { motion } from 'framer-motion';

export default function WorkSection() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await sanity.fetch(`*[_type == "project"] | order(_createdAt desc)`);
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <motion.section
      id="work"
      className="w-full py-20 flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold mb-10 text-[#18181B]">Selected Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project: any, idx: number) => (
          <ProjectCard key={project._id || idx} {...project} image={project.image} link={project.link || ''} />
        ))}
      </div>
    </motion.section>
  );
}