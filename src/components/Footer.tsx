
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-6 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Scroll to top button - moved to right side */}
          <button 
            onClick={scrollToTop}
            className="absolute -top-6 right-8 md:right-12 transform w-12 h-12 rounded-full bg-tech-blue flex items-center justify-center shadow-glow hover:bg-white hover:text-tech-blue transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
          
          <div className="w-full h-px bg-tech-gray/20 my-4"></div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Shivraj Vala. All rights reserved.
            </p>
            
            <p className="text-foreground/60 text-sm">
              Made with <span className="text-tech-blue">❤</span> and modern tech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
