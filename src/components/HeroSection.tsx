
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Hero Content */}
          <div className="space-y-6 text-center lg:text-left max-w-3xl">
            <p className="inline-block px-3 py-1 rounded-full bg-tech-blue/10 border border-tech-blue/20 text-tech-blue text-sm font-medium backdrop-blur-sm opacity-0 animate-fade-in">
              Mobile Development Expert
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold opacity-0 animate-slide-up">
              <span>Building </span>
              <span className="tech-gradient-text">Scalable, AI-Driven</span>
              <span> Mobile Solutions</span>
            </h1>
            
            <p className="text-lg text-foreground/80 opacity-0 animate-slide-up animate-delay-200">
              With over 10 years of experience in Flutter, Kotlin, Jetpack Compose, AR, 
              and AI integration, I create cutting-edge mobile applications that push technological boundaries.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 opacity-0 animate-slide-up animate-delay-300">
              <button 
                onClick={scrollToAbout}
                className="btn bg-tech-gradient text-white px-6 py-3 rounded-lg shadow-glow"
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

          {/* Developer Illustration */}
          <div className="hidden lg:flex items-center justify-center opacity-0 animate-slide-up animate-delay-300">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Background glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 rounded-full bg-tech-blue/5 blur-xl"></div>
              
              {/* Dev Illustrator */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-tech-blue/30 blue-glow animate-pulse-slow">
                <div className="absolute inset-0 bg-gradient-radial from-tech-blue/20 to-transparent"></div>
                <div className="w-full h-full rounded-full bg-tech-gray flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 text-tech-blue">
                    {/* Developer character with laptop */}
                    <rect x="60" y="60" width="80" height="60" fill="currentColor" rx="5" />
                    <rect x="70" y="70" width="60" height="30" fill="hsl(var(--card))" rx="2" />
                    <rect x="75" y="75" width="30" height="5" fill="currentColor" opacity="0.7" />
                    <rect x="75" y="85" width="20" height="5" fill="currentColor" opacity="0.7" />
                    <rect x="75" y="95" width="25" height="5" fill="currentColor" opacity="0.7" />
                    
                    {/* Developer head and body */}
                    <circle cx="100" cy="130" r="20" fill="currentColor" />
                    <rect x="85" y="120" width="30" height="30" rx="15" fill="currentColor" />
                    
                    {/* Face features */}
                    <circle cx="92" cy="125" r="2" fill="hsl(var(--card))" />
                    <circle cx="108" cy="125" r="2" fill="hsl(var(--card))" />
                    <path d="M95,132 C95,136 105,136 105,132" fill="none" stroke="hsl(var(--card))" strokeWidth="2" />
                    
                    {/* Arms typing on laptop */}
                    <path d="M70,125 Q60,140 70,150" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M130,125 Q140,140 130,150" stroke="currentColor" strokeWidth="4" fill="none" />
                    
                    {/* Code symbols */}
                    <text x="140" y="90" fill="currentColor" fontSize="8">{`{}`}</text>
                    <text x="55" y="90" fill="currentColor" fontSize="8">{`</>`}</text>
                  </svg>
                </div>
              </div>
              
              {/* Orbiting tech icons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 glass-card px-3 py-1 rounded-full animate-float">
                <span className="text-tech-blue font-medium">Flutter</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 glass-card px-3 py-1 rounded-full animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-tech-purple font-medium">Android</span>
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
