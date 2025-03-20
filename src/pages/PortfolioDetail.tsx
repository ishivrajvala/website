import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Tag, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { portfolioProjects } from '@/data/portfolioData';
import { Card, CardContent } from '@/components/ui/card';

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = portfolioProjects.find(p => p.id === Number(id));
  const otherProjects = portfolioProjects.filter(p => p.id !== Number(id)).slice(0, 3);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
            <button 
              onClick={() => navigate('/')}
              className="btn btn-outline px-6 py-3 rounded-lg inline-flex items-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Projects
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gradient-to-b from-tech-dark to-tech-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center text-tech-blue hover:underline mb-8"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to all projects
          </button>
          
          {/* Project Hero */}
          <div className="bg-black/40 rounded-xl overflow-hidden glass-card mb-8">
            <div className="h-64 md:h-96 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 md:p-8 w-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs px-2 py-1 rounded-full bg-tech-blue/20 text-tech-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-2xl md:text-4xl font-bold mb-4">{project.title}</h1>
                  <div className="flex space-x-3">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-tech-dark/50 backdrop-blur-sm flex items-center transition-all hover:bg-tech-blue/50"
                      >
                        <Github size={16} className="mr-2" />
                        GitHub
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-tech-blue/80 flex items-center transition-all hover:bg-tech-blue"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - 2/3 width on large screens */}
            <div className="lg:col-span-2">
              <div className="bg-black/40 rounded-xl glass-card p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                <div className="prose prose-invert max-w-none">
                  <div className="whitespace-pre-line">{project.fullDescription}</div>
                </div>
              </div>
              
              {/* Screenshots Gallery */}
              <div className="bg-black/40 rounded-xl glass-card p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="rounded-lg overflow-hidden h-48">
                      <img 
                        src={screenshot} 
                        alt={`Screenshot ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar - 1/3 width on large screens */}
            <div className="space-y-8">
              {/* Challenges */}
              <div className="bg-black/40 rounded-xl glass-card p-6">
                <h2 className="text-xl font-bold mb-4">Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex">
                      <span className="text-tech-blue mr-2">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Results */}
              <div className="bg-black/40 rounded-xl glass-card p-6">
                <h2 className="text-xl font-bold mb-4">Outcomes</h2>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Other Projects */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((otherProject) => (
                <Card 
                  key={otherProject.id} 
                  className="bg-black/40 border-none glass-card cursor-pointer hover:border-tech-blue/30 hover:blue-glow transition-all"
                  onClick={() => navigate(`/portfolio/${otherProject.id}`)}
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={otherProject.image} 
                      alt={otherProject.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{otherProject.title}</h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {otherProject.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs px-2 py-0.5 rounded-full bg-tech-blue/10 text-tech-blue"
                        >
                          {tag}
                        </span>
                      ))}
                      {otherProject.tags.length > 2 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-tech-gray/20 text-tech-blue">
                          +{otherProject.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioDetail;
