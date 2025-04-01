
import React from 'react';
import { Zap, Star, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] flex flex-col justify-center items-center px-2 sm:px-6 overflow-hidden pt-2 pb-1 sm:pt-4 sm:pb-2">
      {/* Background decorative elements */}
      <div className="absolute inset-0 dot-pattern opacity-40 z-0"></div>
      <div className="absolute top-20 right-10 h-10 w-10 sm:h-24 sm:w-24 explosion animate-pulse-bright z-0"></div>
      <div className="absolute bottom-40 left-10 h-8 w-8 sm:h-16 sm:w-16 explosion bg-comic-yellow animate-float z-0"></div>
      
      {/* Larger, more visible background text */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-4xl sm:text-7xl md:text-9xl font-bold opacity-15 z-0 rotate-6 text-comic-red" aria-hidden="true">POW!</div>
      <div className="absolute top-40 left-10 text-3xl sm:text-6xl md:text-8xl font-bold opacity-10 z-0" aria-hidden="true">POW!</div>
      <div className="absolute bottom-20 right-20 text-3xl sm:text-6xl md:text-8xl font-bold opacity-10 z-0" aria-hidden="true">ZAP!</div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl">
        <div className="mb-0.5 sm:mb-2 flex justify-center" aria-hidden="true">
          <Star className="text-comic-yellow animate-pulse-bright h-5 w-5 sm:h-10 sm:w-10 mx-0.5 sm:mx-1" />
          <Zap className="text-comic-red animate-pulse-bright h-5 w-5 sm:h-10 sm:w-10 mx-0.5 sm:mx-1" />
          <Star className="text-comic-blue animate-pulse-bright h-5 w-5 sm:h-10 sm:w-10 mx-0.5 sm:mx-1" />
        </div>
        
        <div className="inline-block bg-comic-red p-0.5 sm:p-3 comic-border transform rotate-2 mb-1 sm:mb-3">
          <h2 className="font-luckiest tracking-wider text-white text-sm sm:text-2xl md:text-3xl">
            <span className="text-comic-yellow">JUNE 26, 2025</span> @ TEL AVIV UNIVERSITY
          </h2>
        </div>
        
        <h1 className="font-luckiest text-2xl sm:text-5xl md:text-6xl lg:text-7xl mb-1 sm:mb-4 comic-text-stroke animate-skew">
          <span className="text-comic-blue">AI</span> <span className="text-comic-yellow">VILLAGE</span>
          <span className="block"><span className="text-white">@</span> <span className="text-comic-red">BSIDES</span> <span className="text-comic-blue">TLV</span></span>
        </h1>
        
        <div className="speech-bubble max-w-xs sm:max-w-sm md:max-w-lg mx-auto mb-0.5 sm:mb-2 animate-float">
          <p className="font-rubik text-comic-black text-xs sm:text-base md:text-lg">
            <span className="font-black text-comic-red">COMIC BOOK</span> <span className="font-black text-comic-blue">MULTIVERSE</span> <span className="font-black text-comic-yellow">EDITION!</span> Join heroes and villains from across the AI security universe for a day of hacking, learning, and collaboration!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
