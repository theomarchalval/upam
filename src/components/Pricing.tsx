import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    if (!section || !title || !cards) return;

    // Set initial state
    gsap.set(title, { opacity: 0, y: 40 });
    gsap.set(cards.children, { opacity: 0, y: 60, scale: 0.9 });

    // Create scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(cards.children, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2
    }, "-=0.4");

  }, []);

  const handleBooking = (plan: string) => {
    if (plan === 'Trial') {
      // Open Cal.com booking page for individual lesson
      window.open('https://cal.com/unpianoamarseille/cours-individuel-d-une-heure', '_blank');
    } else {
      // Show message about plans being available after first lesson
      alert(`Les forfaits sont disponibles après votre première leçon individuelle. Commencez par réserver votre première leçon personnalisée !`);
    }
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 ref={titleRef} className="section-title text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Choisissez Votre
            <span className="block text-gold-accent">Parcours Musical</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 sm:mt-6 px-4">
            Commencez par un cours individuel pour découvrir ma méthode d'enseignement. Après ce premier cours, vous pourrez choisir le forfait qui vous convient le mieux.
          </p>
        </div>

        {/* Information Banner */}
        <div className="bg-gold-accent/10 border border-gold-accent/30 rounded-lg p-4 sm:p-6 max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-gold-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-piano-black mb-2">Comment ça marche ?</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                <strong>1. Premier cours individuel</strong> - On fait connaissance, j'évalue votre niveau et on définit vos objectifs.<br/>
                <strong>2. Choisissez votre forfait</strong> - Après ce premier cours, vous pourrez sélectionner le plan qui vous convient.<br/>
                <strong>3. Continuez à votre rythme</strong> - Réservez vos cours selon vos disponibilités.
              </p>
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          
          {/* Trial Lesson */}
          <Card className="elegant-card p-4 sm:p-6 lg:p-8 relative overflow-hidden flex">
            <div className="relative z-10 flex flex-col w-full">
              <div className="text-center mb-3 sm:mb-4 lg:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-piano-black mb-1 sm:mb-2">Cours Individuel</h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">60 minutes</p>
              </div>
              
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-piano-black mb-1 sm:mb-2">€40</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">60 minutes</div>
              </div>

              <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3 mb-4 sm:mb-6 lg:mb-8 flex-grow">
                <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Évaluation personnalisée du niveau
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Première approche des techniques fondamentales
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Option: Masterclass avant un concours ou un examen
                </li>
              </ul>

              <Button 
                onClick={() => handleBooking('Trial')}
                variant="outline"
                className="w-full border-2 border-piano-black text-piano-black hover:bg-piano-black hover:text-piano-white transition-all duration-200 py-2 sm:py-3 text-xs sm:text-sm lg:text-base"
              >
                Réserver votre première leçon
              </Button>
            </div>
          </Card>

                    {/* Monthly Package - Featured */}
          <Card className="elegant-card p-4 sm:p-6 lg:p-8 relative overflow-hidden border-2 border-gold-accent flex opacity-75">
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 bg-gold-accent text-piano-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold">
              Populaire
            </div>
            
            <div className="relative z-10 flex flex-col w-full">
              <div className="text-center mb-3 sm:mb-4 lg:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-piano-black mb-1 sm:mb-2">Forfait Mois</h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">4 cours de 60 minutes</p>
              </div>
              
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-piano-black mb-1 sm:mb-2">€140</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">€35 par cours</div>
              </div>

              <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3 mb-4 sm:mb-6 lg:mb-8 flex-grow">
                <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Programme structuré
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Suivi des progrès
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Support WhatsApp
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Reprogrammation flexible
                </li>
              </ul>

              <Button 
                onClick={() => handleBooking('Monthly')}
                variant="outline"
                className="w-full border-2 border-muted text-muted-foreground cursor-not-allowed py-2 sm:py-3 text-xs sm:text-sm lg:text-base"
                disabled
              >
                Disponible après le 1er cours
              </Button>
            </div>
          </Card>

          {/* Intensive Package */}
          <Card className="elegant-card p-4 sm:p-6 lg:p-8 relative overflow-hidden flex opacity-75">
            
            <div className="relative z-10 flex flex-col w-full">
              <div className="text-center mb-3 sm:mb-4 lg:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-piano-black mb-1 sm:mb-2">Forfait Trimestre</h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">12 cours de 60 minutes</p>
              </div>
              
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-piano-black mb-1 sm:mb-2">€360</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">€30 par cours</div>
              </div>

              <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3 mb-4 sm:mb-6 lg:mb-8 flex-grow">
                <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Tous les avantages du forfait Mois
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Progression durable
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  Réservation prioritaire
                </li>
              </ul>

              <Button 
                onClick={() => handleBooking('Intensive')}
                variant="outline"
                className="w-full border-2 border-muted text-muted-foreground cursor-not-allowed py-2 sm:py-3 text-xs sm:text-sm lg:text-base"
                disabled
              >
                Disponible après le 1er cours
              </Button>
            </div>
          </Card>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
            Tous les cours ont lieu à mon domicile, dans le quartier du Camas à Marseille.
          </p>
          <div className="space-y-4">
            <Button 
              onClick={() => handleBooking('Trial')}
              className="gold-gradient text-piano-black font-semibold px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg hover:scale-105 transition-transform duration-200 w-full sm:w-auto max-w-xs sm:max-w-sm mx-auto"
            >
              Réserver votre première leçon
            </Button>
            <p className="text-sm text-muted-foreground">
              Les forfaits personnalisés sont disponibles après votre premier cours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;