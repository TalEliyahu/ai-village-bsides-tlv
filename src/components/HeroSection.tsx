
import React from 'react';
import { Zap, Star, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden pt-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 dot-pattern opacity-40 z-0"></div>
      <div className="absolute top-20 right-10 h-24 w-24 explosion animate-pulse-bright z-0"></div>
      <div className="absolute bottom-40 left-10 h-16 w-16 explosion bg-comic-yellow animate-float z-0"></div>
      <div className="absolute top-40 left-10 text-8xl font-bold opacity-10 z-0">POW!</div>
      <div className="absolute bottom-20 right-20 text-8xl font-bold opacity-10 z-0">ZAP!</div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl">
        <div className="mb-4 flex justify-center">
          <Star className="text-comic-yellow animate-pulse-bright h-10 w-10 mx-1" />
          <Zap className="text-comic-red animate-pulse-bright h-10 w-10 mx-1" />
          <Star className="text-comic-blue animate-pulse-bright h-10 w-10 mx-1" />
        </div>
        
        <div className="inline-block bg-comic-red p-4 comic-border transform rotate-2 mb-4">
          <h2 className="font-luckiest tracking-wider text-white text-3xl">
            <span className="text-comic-yellow">JUNE 26, 2025</span> @ TEL AVIV UNIVERSITY
          </h2>
        </div>
        
        <h1 className="font-luckiest text-6xl md:text-8xl mb-6 comic-text-stroke animate-skew">
          <span className="text-comic-red">THE</span> <span className="text-comic-blue">AI</span> <span className="text-comic-yellow">VILLAGE</span>
          <span className="block"><span className="text-white">@</span> <span className="text-comic-red">BSIDES</span> <span className="text-comic-blue">TLV</span></span>
        </h1>
        
        <div className="speech-bubble max-w-lg mx-auto mb-12 animate-float">
          <p className="font-rubik text-comic-black text-lg">
            <span className="font-black text-comic-red">COMIC BOOK</span> <span className="font-black text-comic-blue">MULTIVERSE</span> <span className="font-black text-comic-yellow">EDITION!</span> Join heroes and villains from across the AI security universe for a day of hacking, learning, and collaboration!
          </p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ArrowDown size={24} />
          <span className="sr-only">Scroll down</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
