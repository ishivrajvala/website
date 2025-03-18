
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
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
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5 lg:pr-12">
            <div className="space-y-6 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
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
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 opacity-0 animate-slide-up animate-delay-300">
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
              
              <div className="flex justify-center lg:justify-start space-x-5 pt-2 opacity-0 animate-slide-up animate-delay-400">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Linkedin size={22} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Twitter size={22} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 mt-12 lg:mt-0 opacity-0 animate-slide-up animate-delay-300">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Tech Illustrator instead of SV text */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-tech-blue/30 blue-glow animate-pulse-slow">
                <div className="absolute inset-0 bg-gradient-radial from-tech-blue/20 to-transparent"></div>
                <div className="w-full h-full rounded-full bg-tech-gray flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 text-tech-blue">
                    <path fill="currentColor" d="M80,30 L120,30 L140,70 L160,70 L160,130 L140,130 L120,170 L80,170 L60,130 L40,130 L40,70 L60,70 L80,30 Z" />
                    <circle cx="100" cy="100" r="20" fill="hsl(var(--card))" />
                    <path fill="currentColor" d="M95,85 L115,85 L115,115 L95,115 Z" />
                    <circle cx="90" cy="95" r="5" fill="currentColor" />
                    <circle cx="110" cy="95" r="5" fill="currentColor" />
                    <path fill="none" stroke="currentColor" strokeWidth="2" d="M90,110 C90,115 110,115 110,110" />
                  </svg>
                </div>
              </div>
              
              {/* Background glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 rounded-full bg-tech-blue/5 blur-xl"></div>
              
              {/* Orbiting tech icons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 glass-card px-3 py-1 rounded-full animate-float">
                <span className="text-tech-blue font-medium">Flutter</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 glass-card px-3 py-1 rounded-full animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-tech-purple font-medium">Kotlin</span>
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-3/4 -translate-y-1/2 glass-card px-3 py-1 rounded-full animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-tech-pink font-medium">AR</span>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-3/4 -translate-y-1/2 glass-card px-3 py-1 rounded-full animate-float" style={{ animationDelay: '3s' }}>
                <span className="text-tech-blue font-medium">AI</span>
              </div>
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
