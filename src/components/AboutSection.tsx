
import React from 'react';
import { Code, Laptop, Cpu, Database, Smartphone } from 'lucide-react';
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
    <section id="about" className="py-16 bg-gradient-to-b from-tech-darker to-tech-dark">
      <div className="section-container">
        <div className="text-center mb-12 opacity-0 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="mx-auto w-20 h-1 bg-tech-gradient rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            Passionate mobile developer with a focus on creating beautiful, performant, and user-friendly applications.
            Specialized in Flutter, Kotlin, and emerging technologies.
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl opacity-0 animate-slide-up animate-delay-200">
          <div className="space-y-8">
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
