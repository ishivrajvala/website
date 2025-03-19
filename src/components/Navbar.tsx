
import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
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
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-tech-gradient animate-gradient-shift font-heading">
              Shivraj Vala
            </span>
          </div>
          
          {/* Desktop Navigation - more compact */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-4">
              <button onClick={() => handleNavigation('home')} className="nav-link active text-sm">Home</button>
              <button onClick={() => handleNavigation('about')} className="nav-link text-sm">About</button>
              <button onClick={() => handleNavigation('projects')} className="nav-link text-sm">Projects</button>
              <button onClick={() => handleNavigation('blogs')} className="nav-link flex items-center text-sm">
                <BookOpen size={14} className="mr-1" />
                Articles
              </button>
              <button 
                onClick={() => handleNavigation('contact')} 
                className="ml-2 px-4 py-2 bg-tech-gradient text-sm text-white rounded-lg hover:opacity-90 transition-all shadow-glow"
              >
                Contact Me
              </button>
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
        <button onClick={() => handleNavigation('blogs')} className="text-2xl font-medium hover:text-tech-blue transition-colors flex items-center">
          <BookOpen size={20} className="mr-2" />
          Articles
        </button>
        <button 
          onClick={() => handleNavigation('contact')} 
          className="mt-4 px-6 py-2 bg-tech-gradient rounded-lg text-white hover:opacity-90 transition-all shadow-glow"
        >
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Navbar;
