import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <motion.a
                href={project.link}
                className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl transition flex flex-col overflow-hidden cursor-pointer relative"
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(99,102,241,0.12)' }}
                whileTap={{ scale: 0.97 }}
                onClick={e => {
                    e.preventDefault();
                    setShowDetails(true);
                }}
                layoutId={`card-${project.title}`}
            >
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {(project.tags || project.technologies || []).map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-700">{tag}</span>
                        ))}
                    </div>
                </div>
            </motion.a>
            <AnimatePresence>
                {showDetails && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowDetails(false)}
                    >
                        <motion.div
                            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-10 relative flex flex-col gap-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            layoutId={`card-${project.title}`}
                            onClick={e => e.stopPropagation()}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-xl mb-4" />
                            <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {(project.tags || project.technologies || []).map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-700">{tag}</span>
                                ))}
                            </div>
                            <button
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                                onClick={() => setShowDetails(false)}
                                aria-label="Close"
                            >
                                ×
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;