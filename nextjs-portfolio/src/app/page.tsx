import React from 'react';
import dynamic from 'next/dynamic';
const Hero3D = dynamic(() => import('../../../src/components/sections/Hero3D'), { ssr: false });
import WorkSection from '../components/sections/WorkSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import SearchBar from '../components/SearchBar';

const HomePage: React.FC = () => {
  return (
    <main className="flex-grow p-4">
      <Hero3D />
      <AboutSection />
      <SearchBar />
      <WorkSection />
      
      <ContactSection />
    </main>
  );
};

export default HomePage;