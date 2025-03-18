
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: 'AR Shopping Experience',
    description: 'A Flutter-based AR shopping application that allows users to visualize products in their own space before purchase.',
    image: 'placeholder.svg',
    tags: ['Flutter', 'ARKit', 'ARCore', 'Firebase'],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  },
  {
    id: 2,
    title: 'AI Fitness Coach',
    description: 'A mobile fitness application with real-time pose estimation and AI-powered workout recommendations.',
    image: 'placeholder.svg',
    tags: ['Kotlin', 'TensorFlow', 'Jetpack Compose', 'ML Kit'],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    description: 'A comprehensive financial management app with interactive charts, budget tracking, and investment insights.',
    image: 'placeholder.svg',
    tags: ['Flutter', 'Firebase', 'GraphQL', 'Charts'],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  },
  {
    id: 4,
    title: 'Smart Home Controller',
    description: 'An IoT mobile application for controlling and monitoring smart home devices with voice commands and automations.',
    image: 'placeholder.svg',
    tags: ['Kotlin', 'IoT', 'MQTT', 'Voice Recognition'],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  },
  {
    id: 5,
    title: 'Social Media Analytics',
    description: 'A data visualization app for social media marketers with real-time analytics and content performance tracking.',
    image: 'placeholder.svg',
    tags: ['Flutter', 'REST API', 'Firebase', 'Analytics'],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  },
  {
    id: 6,
    title: 'Travel Companion',
    description: 'A travel planning app with AR navigation, translation, and local recommendations powered by machine learning.',
    image: 'placeholder.svg',
    tags: ['Kotlin', 'AR', 'Machine Learning', 'Maps API'],
    links: {
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  },
];

// Filter categories based on project tags
const filters = ['All', 'Flutter', 'Kotlin', 'AR', 'AI', 'Firebase'];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-tech-dark to-tech-darker">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="mx-auto w-20 h-1 bg-tech-gradient rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            A collection of my recent work showcasing expertise in mobile development,
            AR/VR, AI integration, and system architecture.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2 opacity-0 animate-slide-up animate-delay-200">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'px-4 py-2 rounded-full transition-all duration-300',
                activeFilter === filter
                  ? 'bg-tech-blue text-white shadow-sm blue-glow'
                  : 'bg-tech-gray/30 hover:bg-tech-gray/50 text-foreground'
              )}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                'group glass-card rounded-xl overflow-hidden transition-all duration-500 hover:blue-glow hover:border-tech-blue/30 opacity-0',
                'animate-slide-up'
              )}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-darker to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-tech-dark/50 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-tech-blue/50"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-tech-dark/50 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-tech-blue/50"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-tech-blue/10 text-tech-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-slide-up animate-delay-400">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline px-6 py-3 rounded-lg inline-flex items-center"
          >
            View More Projects <Github size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
