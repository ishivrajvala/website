
import React from 'react';
import { Code, Star, Cpu, Layers, Smartphone, Database, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const skills = [
  { name: 'Flutter', level: 95 },
  { name: 'Kotlin', level: 90 },
  { name: 'Swift', level: 85 },
  { name: 'Jetpack Compose', level: 85 },
  { name: 'AR Development', level: 80 },
  { name: 'AI Integration', level: 85 },
  { name: 'System Design', level: 90 },
];

const experiences = [
  {
    period: '2019 - Present',
    role: 'Lead Mobile Architect',
    company: 'TechNova Solutions',
    description: 'Leading mobile development strategies and architecture for enterprise clients.',
  },
  {
    period: '2016 - 2019',
    role: 'Senior Mobile Developer',
    company: 'MobileX Innovations',
    description: 'Developed high-performance apps with AR capabilities and complex animations.',
  },
  {
    period: '2013 - 2016',
    role: 'Mobile Developer',
    company: 'AppDynamics',
    description: 'Built and maintained multiple successful apps for iOS and Android platforms.',
  },
];

interface SkillItemProps {
  name: string;
  level: number;
}

const SkillItem = ({ name, level }: SkillItemProps) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="w-full bg-tech-gray/30 rounded-full h-2">
      <div 
        className="bg-tech-gradient rounded-full h-2 animate-pulse-slow"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-tech-darker to-tech-dark">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="mx-auto w-20 h-1 bg-tech-gradient rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            Passionate mobile developer with a focus on creating beautiful, performant, and user-friendly applications.
            Specialized in Flutter, Kotlin, and emerging technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Tech Illustrator */}
          <div className="lg:col-span-5 flex items-center justify-center opacity-0 animate-slide-up animate-delay-200">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Tech Illustrator */}
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
          
          {/* Experience & Skills */}
          <div className="lg:col-span-7 space-y-8 opacity-0 animate-slide-up animate-delay-300">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 pb-6 border-l border-tech-blue/30 last:border-0">
                    <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-tech-blue -translate-x-1.5"></div>
                    <span className="inline-block px-3 py-1 rounded-full bg-tech-blue/10 text-tech-blue text-xs font-medium mb-2">
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <p className="text-tech-blue">{exp.company}</p>
                    <p className="text-foreground/70 mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-1">
                {skills.map((skill, index) => (
                  <SkillItem key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
