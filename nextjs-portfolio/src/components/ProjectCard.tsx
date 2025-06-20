import React from 'react';
import { urlFor } from '../lib/sanityImage';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  tags?: string[];
  link: string;
  image?: any;
}

const fallbackImage = '/fallback-project.jpg';

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies = [], tags = [], link, image }) => {
  const techList = technologies.length > 0 ? technologies : tags;
  let imageUrl = fallbackImage;
  if (image && image.asset && image.asset._ref && image.asset._ref.startsWith('image-')) {
    try {
      imageUrl = urlFor(image).width(600).height(300).url();
    } catch (e) {
      imageUrl = fallbackImage;
    }
  }
  return (
    <div className="bg-white shadow-md rounded-lg p-4 transition-shadow duration-300 cursor-pointer group relative overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded mb-4 relative z-10"
      />
      <h3 className="text-xl font-semibold mb-2 relative z-10">{title}</h3>
      <p className="text-gray-700 mb-4 relative z-10">{description}</p>
      <div className="flex flex-wrap mb-4 relative z-10">
        {(techList || []).map((tech, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline font-semibold relative z-10"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;