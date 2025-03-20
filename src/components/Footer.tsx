
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
          <div className="w-full h-px bg-tech-gray/20 my-4"></div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Shivraj Vala. All rights reserved.
            </p>
            
            {/* Replaced "Made with" text with scroll-to-top button */}
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-tech-blue flex items-center justify-center shadow-glow hover:bg-white hover:text-tech-blue transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
