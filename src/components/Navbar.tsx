
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation and close menu
  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-tech-darker/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold tech-gradient-text">Shivraj Vala</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigation('home')} className="nav-link active">Home</button>
            <button onClick={() => handleNavigation('about')} className="nav-link">About</button>
            <button onClick={() => handleNavigation('projects')} className="nav-link">Projects</button>
            <button onClick={() => handleNavigation('contact')} className="nav-link">Contact</button>
            
            <div className="ml-4 flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Twitter size={20} />
              </a>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-tech-blue transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-tech-darker/95 backdrop-blur-md flex flex-col justify-center items-center space-y-8 transition-all duration-300 ease-in-out',
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        )}
      >
        <button onClick={() => handleNavigation('home')} className="text-2xl font-medium hover:text-tech-blue transition-colors">Home</button>
        <button onClick={() => handleNavigation('about')} className="text-2xl font-medium hover:text-tech-blue transition-colors">About</button>
        <button onClick={() => handleNavigation('projects')} className="text-2xl font-medium hover:text-tech-blue transition-colors">Projects</button>
        <button onClick={() => handleNavigation('contact')} className="text-2xl font-medium hover:text-tech-blue transition-colors">Contact</button>
        
        <div className="flex items-center space-x-6 mt-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
