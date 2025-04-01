
import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 sm:py-10 px-4 sm:px-8 relative bg-comic-black border-t-4 border-comic-yellow">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-bangers text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6">
          AI VILLAGE @ BSIDES TLV 2025
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-comic-red px-3 py-1 sm:px-4 sm:py-2 text-white font-comic font-bold text-sm sm:text-base">
            JUNE 26, 2025
          </div>
          <div className="bg-comic-blue px-3 py-1 sm:px-4 sm:py-2 text-white font-comic font-bold text-sm sm:text-base">
            TEL AVIV UNIVERSITY
          </div>
          <div className="bg-comic-yellow px-3 py-1 sm:px-4 sm:py-2 text-comic-black font-comic font-bold text-sm sm:text-base">
            COMIC MULTIVERSE EDITION
          </div>
        </div>
        
        <div className="mt-4">
          <a 
            href="https://github.com/TalEliyahu/ai-village-bsides-tlv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-comic-yellow transition-colors"
            aria-label="GitHub repository"
          >
            <Github size={24} />
            <span className="font-comic text-sm">Source Code</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
