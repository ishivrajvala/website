
import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Scroll to top button */}
          <button 
            onClick={scrollToTop}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-tech-blue flex items-center justify-center shadow-glow hover:bg-white hover:text-tech-blue transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-tech-gradient animate-gradient-shift">
                <span className="text-3xl">SV</span><span className="ml-1 text-xl">Dev</span>
              </span>
              <p className="text-foreground/60 mt-2 text-sm text-center md:text-left">
                Building exceptional mobile experiences.
              </p>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="Twitter Profile"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@shivrajvala.com" 
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="w-full h-px bg-tech-gray/20 my-8"></div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
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
