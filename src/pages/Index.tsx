import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/Hero';

import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scrolling setup
    gsap.registerPlugin(ScrollTrigger);
    
    // Enable smooth scrolling for the entire page
    gsap.config({
      autoSleep: 60,
      force3D: false,
      nullTargetWarn: false
    });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Pricing />
      <Contact />
    </main>
  );
};

export default Index;