import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    // Set initial state
    gsap.set(content.children, { opacity: 0, y: 40 });

    // Create scroll-triggered animation
    gsap.to(content.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

  }, []);

  const handleContact = (method: string) => {
    switch (method) {
      case 'phone':
        window.open('tel:+33776191353');
        break;
      case 'email':
        window.open('mailto:unpianoamarseille@gmail.com');
        break;
      case 'whatsapp':
        window.open('https://wa.me/33776191353');
        break;
      case 'book':
        window.open('https://cal.com/unpianoamarseille/cours-individuel-d-une-heure', '_blank');
        break;
      default:
        alert('Booking form would open here in a real application!');
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-ivory">
      <div className="container mx-auto max-w-4xl">
        <div ref={contentRef} className="text-center space-y-8 sm:space-y-12">
          
          <div>
            <h2 className="section-title text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Prêt à Commencer Votre
              <span className="block text-gold-accent">Parcours Musical ?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 sm:mt-6 px-4">
              Contactez-moi pour en savoir plus ou réservez directement votre premier cours.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto">
            <Card className="elegant-card p-3 sm:p-4 lg:p-6 text-center hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => handleContact('phone')}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gold-accent rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-piano-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-piano-black mb-1 text-xs sm:text-sm lg:text-base">Téléphone</h3>
              <p className="text-muted-foreground text-xs lg:text-sm">+33 7 76 19 13 53</p>
            </Card>

            <Card className="elegant-card p-3 sm:p-4 lg:p-6 text-center hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => handleContact('email')}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gold-accent rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-piano-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-piano-black mb-1 text-xs sm:text-sm lg:text-base">Email</h3>
              <p className="text-muted-foreground text-xs lg:text-sm break-all">unpianoamarseille@gmail.com</p>
            </Card>

            <Card className="elegant-card p-3 sm:p-4 lg:p-6 text-center hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => handleContact('whatsapp')}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gold-accent rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-piano-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
                </svg>
              </div>
              <h3 className="font-semibold text-piano-black mb-1 text-xs sm:text-sm lg:text-base">WhatsApp</h3>
              <p className="text-muted-foreground text-xs lg:text-sm">Réponse rapide</p>
            </Card>
          </div>

          {/* Main CTA */}
          <div className="space-y-4 sm:space-y-6 px-4">
            <Button 
              onClick={() => handleContact('book')}
              className="gold-gradient text-piano-black font-semibold px-6 sm:px-8 lg:px-12 py-2.5 sm:py-3 lg:py-4 text-base sm:text-lg lg:text-xl hover:scale-105 transition-transform duration-200 w-full sm:w-auto max-w-xs sm:max-w-md mx-auto"
            >
              Réserver votre première leçon
            </Button>
            
            
          </div>

          {/* Footer */}
          <div className="pt-8 sm:pt-12 border-t border-soft-gray">
            <p className="text-xs sm:text-sm text-muted-foreground px-4 leading-relaxed">
              © 2025 Un Piano à Marseille.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;