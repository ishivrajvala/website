
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  // Create animated particles in the background
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const particles = [];
    const colors = ['#0EA5E9', '#8B5CF6', '#EC4899'];
    const container = particlesRef.current;
    const COUNT = 15; // Number of particles
    
    for (let i = 0; i < COUNT; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random properties
      const size = Math.random() * 10 + 3;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.color = color;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      
      // Animation properties
      const duration = Math.random() * 60 + 30;
      const delay = Math.random() * 10;
      
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      
      container.appendChild(particle);
      particles.push(particle);
    }
    
    // Cleanup
    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, []);
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div ref={particlesRef} className="particles"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center lg:text-left">
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <p className="inline-block px-3 py-1 rounded-full bg-tech-blue/10 border border-tech-blue/20 text-tech-blue text-sm font-medium backdrop-blur-sm opacity-0 animate-fade-in">
              Mobile Development Expert
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold opacity-0 animate-slide-up">
              <span>Building </span>
              <span className="tech-gradient-text">Scalable, AI-Driven</span>
              <span> Mobile Solutions</span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-2xl opacity-0 animate-slide-up animate-delay-200">
              With over 10 years of experience in Flutter, Kotlin, Jetpack Compose, AR, 
              and AI integration, I create cutting-edge mobile applications that push technological boundaries.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-2 opacity-0 animate-slide-up animate-delay-300">
              <button 
                onClick={scrollToAbout}
                className="btn btn-primary px-6 py-3 rounded-lg"
              >
                Explore My Work <ArrowRight size={18} className="ml-2" />
              </button>
              
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="btn btn-outline px-6 py-3 rounded-lg"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-slide-up animate-delay-500">
        <div className="w-8 h-12 rounded-full border-2 border-tech-blue/30 flex justify-center">
          <div className="w-1 h-3 bg-tech-blue rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
