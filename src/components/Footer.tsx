
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 relative bg-comic-black border-t-4 border-comic-yellow">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-bangers text-4xl text-white mb-6">
          THE AI VILLAGE @ BSIDES TLV
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-comic-red px-4 py-2 text-white font-comic font-bold">
            JUNE 26, 2025
          </div>
          <div className="bg-comic-blue px-4 py-2 text-white font-comic font-bold">
            TEL AVIV UNIVERSITY
          </div>
          <div className="bg-comic-yellow px-4 py-2 text-comic-black font-comic font-bold">
            COMIC MULTIVERSE EDITION
          </div>
        </div>
        
        <p className="text-gray-400 font-comic mb-2">
          Part of BSides TLV 2025 - The premier cybersecurity community conference in Israel
        </p>
        
        <p className="text-gray-600 text-sm font-comic">
          © 2025 The AI Village @ BSides TLV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
