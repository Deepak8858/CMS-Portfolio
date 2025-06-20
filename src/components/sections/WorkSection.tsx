import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';

const projects = [
	{
		title: 'Minimal Blog Platform',
		description:
			'A clean, modern blog platform with markdown support and instant search.',
		tags: ['Next.js', 'TypeScript', 'Tailwind'],
		image: '/project1.jpg',
		link: '#',
	},
	{
		title: '3D Globe Explorer',
		description:
			'Interactive 3D globe visualization using Three.js and React Three Fiber.',
		tags: ['Three.js', 'React Three Fiber', 'Drei'],
		image: '/project2.jpg',
		link: '#',
	},
	{
		title: 'Portfolio CMS',
		description:
			'A headless CMS-powered portfolio with real-time editing and AI summaries.',
		tags: ['Sanity', 'OpenAI', 'Supabase'],
		image: '/project3.jpg',
		link: '#',
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15 } }),
};

export default function WorkSection() {
	return (
		<section
			id="work"
			className="w-full py-20 flex flex-col items-center"
		>
			<motion.h2
				className="text-3xl font-bold mb-10 text-gray-900"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
			>
				Selected Work
			</motion.h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
				{projects.map((project, idx) => (
					<motion.div
						key={idx}
						custom={idx}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={cardVariants}
					>
						<ProjectCard project={project} />
					</motion.div>
				))}
			</div>
		</section>
	);
}