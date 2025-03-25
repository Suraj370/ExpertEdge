import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui-elements/Button';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const headingElement = headingRef.current;
    if (!headingElement) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headingElement.classList.add('animate-slide-down');
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(headingElement);
    
    return () => {
      if (headingElement) observer.unobserve(headingElement);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] blur-[120px] opacity-20 bg-gradient-to-r from-blue-600/40 via-blue-400/40 to-blue-600/30 rounded-full" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center py-1 px-3 text-xs font-medium rounded-full glass">
              <span className="h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse-subtle"></span>
              Connect with top industry experts
            </span>
          </div>
          
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0"
          >
            Find the perfect <span className="text-gradient">mentor</span> to accelerate your growth
          </h1>
          
          <p className="text-lg text-light-300/80 mb-8 max-w-2xl mx-auto opacity-0 animate-slide-up animation-delay-200">
            Connect with professionals who can guide your career, answer your questions, and help you achieve your goals faster than you thought possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up animation-delay-300">
            <Button size="lg" rightIcon={<ArrowRight size={16} />}>
              Find a Mentor
            </Button>
            <Button size="lg" variant="outline">
              Become a Mentor
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center items-center space-x-6 text-sm opacity-0 animate-slide-up animation-delay-400">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-300 mr-2">500+</div>
              <div className="text-light-300/70">Verified Mentors</div>
            </div>
            <div className="h-4 w-px bg-white/20"></div>
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-300 mr-2">12k+</div>
              <div className="text-light-300/70">Sessions Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;