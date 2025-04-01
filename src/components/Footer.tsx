
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 px-4 relative bg-comic-black border-t-4 border-comic-yellow mb-16 sm:mb-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-bangers text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6">
          THE AI VILLAGE @ BSIDES TLV
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
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
        
        <p className="text-gray-600 text-xs sm:text-sm font-comic">
          © 2025 The AI Village @ BSides TLV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
