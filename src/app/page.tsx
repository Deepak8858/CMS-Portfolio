import Hero3D from '../components/sections/Hero3D';
import AnimatedWaveSVG from '../components/ui/AnimatedWaveSVG';
import Hero from '../components/sections/Hero';
import WorkSection from '../components/sections/WorkSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <Hero3D />
        <AnimatedWaveSVG />
      </div>
      <Hero />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
