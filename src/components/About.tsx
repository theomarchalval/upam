import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const video = videoRef.current;

    if (!section || !content || !video) return;

    // Set initial state
    gsap.set([content, video], {
      opacity: 0,
      y: 60
    });

    // Create scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(content, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(video, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.7");

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
    <section id="about" ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-ivory">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Content */}
          <div ref={contentRef} className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-piano-black mb-6 sm:mb-8 font-poppins">
                Vous vous (re)mettez
                <span className="block text-gold-accent">Au piano?</span>
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed text-foreground/90">
                <p>
                  ☀️ Vous habitez Marseille, vous voulez vous initier, vous perfectionner ou simplement vous amuser au piano?</p>
                  <p>
                  🎹 <strong>Un Piano à Marseille</strong>, c&apos;est une formation pianistique complète <em>pour tous</em>, que vous soyez débutants ou dans un cursus de conservatoire.

                </p>
                <p>
                 👋 Je m’appelle Théo, j’ai 23 ans, et j’enseigne le piano à Marseille depuis plus de 5 ans.
                 </p>
                 <p> 🎓 Formé aux conservatoires de Genève, Grenoble et Marseille, j’ai eu la chance d’étudier auprès de grandes figures de l’école française : Sandra Chamoux, elle-même élève de Vlado Perlemuter, formé par le compositeur <strong>Maurice Ravel</strong>, et Véronique Pelissero, élève du compositeur <strong>Olivier Messiaen</strong>.<br /><br />
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-piano-black">Ce que je propose :</h3>
              <ul className="space-y-2 text-base sm:text-lg">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Plans de cours personnalisés
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Répertoire classique et contemporain
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Technique et théorie musicale
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Préparation aux concours, examens et diplômes
                </li>
              </ul>
            </div>

            <Button 
              onClick={() => scrollToSection('pricing')}
              className="gold-gradient text-piano-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:scale-105 transition-transform duration-200 w-full sm:w-auto max-w-sm"
            >
              Commencer votre parcours musical
            </Button>
          </div>

          {/* Video */}
          <div ref={videoRef} className="relative mt-6 sm:mt-8 lg:mt-0 flex flex-col justify-center items-center">
            <div className="relative max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-piano-black w-full flex justify-center items-center mx-auto">
              {/* Force vertical 9:16 aspect ratio */}
              <div className="aspect-[9/16] flex justify-center items-center w-full">
                <iframe
                  src="https://www.youtube.com/embed/eIyG3txrzP8?autoplay=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=eIyG3txrzP8"
                  title="Piano Performance by Your Teacher"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 italic">Le prof au piano :)</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;