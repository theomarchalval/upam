import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import pianoStudio from '@/assets/piano-studio.jpg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial state
    gsap.set([textRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      scale: 0.9
    });

    gsap.set(backgroundRef.current, {
      scale: 1.1,
      opacity: 0
    });

    gsap.set(overlayRef.current, {
      opacity: 0
    });

    // Animation sequence - image expansion with text blend
    tl.to(backgroundRef.current, {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "power3.out"
    })
    .to(overlayRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1.5")
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.5,
      ease: "power3.out"
    }, "-=1")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");

  }, []);

  // Hide scroll indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section ref={heroRef} className="hero-section relative overflow-hidden">
      {/* Full Background Image */}
      <div 
        ref={backgroundRef}
        className="hero-background absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${pianoStudio})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay for Text Readability */}
      <div 
        ref={overlayRef}
        className="hero-overlay absolute inset-0 bg-gradient-to-b from-piano-black/40 via-piano-black/60 to-piano-black/80"
      />
      
      {/* Content Container */}
      <div className="hero-content relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center">
        
        {/* Main Title with Text Blend Effect */}
        <div ref={textRef} className="hero-text-container space-y-4 sm:space-y-6 md:space-y-8 max-w-4xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight sm:leading-none">
              <span className="hero-text-blend block">Un Piano à</span>
              <span className="hero-text-accent block">Marseille</span>
            </h1>
            <p className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl text-piano-white/90 leading-relaxed max-w-3xl mx-auto font-light px-2">
              Découvrez une méthode unique à deux instruments pour un apprentissage sur mesure, que vous soyez grand débutant ou futur professionnel.
            </p>
            
            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pt-3 sm:pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-gold-accent fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-piano-white/80 text-center">Plus de 5 ans d'expérience</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div ref={ctaRef} className="hero-cta flex flex-col gap-3 sm:gap-4 justify-center pt-6 sm:pt-8 px-2">
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="hero-primary-btn gold-gradient text-piano-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gold-accent/25 w-full max-w-sm mx-auto"
            >
              Commencer votre parcours musical
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('about')}
              className="hero-secondary-btn border-2 border-piano-white/80 text-piano-white bg-piano-white/10 backdrop-blur-sm hover:bg-piano-white hover:text-piano-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 w-full max-w-sm mx-auto"
            >
              Découvrir l'enseignant
            </Button>
          </div>
        </div>
      </div>
      
      {/* Elegant Scroll Indicator */}
      {showScrollIndicator && (
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group transition-all duration-300 hover:scale-110 z-20"
          onClick={() => scrollToSection('about')}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-piano-white/80 font-light tracking-wide">Découvrir</div>
            <div className="relative">
              <ChevronDown className="w-6 h-6 text-piano-white/80 animate-bounce group-hover:text-gold-accent transition-colors duration-300" />
              <ChevronDown className="w-6 h-6 text-piano-white/40 animate-bounce absolute top-0 left-0" style={{animationDelay: '0.2s'}} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;