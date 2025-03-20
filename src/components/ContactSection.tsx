
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-tech-darker to-black">
      <div className="section-container">
        <div className="text-center mb-10 opacity-0 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="mx-auto w-20 h-1 bg-tech-gradient rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            Have a project in mind or want to discuss collaboration opportunities?
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="opacity-0 animate-slide-up animate-delay-200">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-tech-blue/10 flex items-center justify-center mr-4">
                    <Mail className="text-tech-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href="mailto:contact@shivrajvala.com" className="text-foreground/70 hover:text-tech-blue transition-colors">
                      contact@shivrajvala.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-tech-blue/10 flex items-center justify-center mr-4">
                    <Phone className="text-tech-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-foreground/70 hover:text-tech-blue transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-tech-blue/10 flex items-center justify-center mr-4">
                    <MapPin className="text-tech-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-foreground/70">San Francisco, California, USA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-tech-blue/10 flex items-center justify-center mr-4">
                    <Linkedin className="text-tech-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">LinkedIn</h4>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-tech-blue transition-colors">
                      linkedin.com/in/shivrajvala
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-tech-gray/20">
                <h4 className="text-lg font-medium mb-2">Working Hours</h4>
                <p className="text-foreground/70 mb-1">Monday - Friday: 9 AM - 6 PM PST</p>
                <p className="text-foreground/70">Weekend: Available for urgent matters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
