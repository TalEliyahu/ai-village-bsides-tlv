
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-0.5 w-6 md:w-12 bg-comic-red"></div>
          <h2 className="font-bangers text-3xl md:text-5xl px-2 md:px-4 text-white comic-text-stroke">ABOUT THE VILLAGE</h2>
          <div className="h-0.5 w-6 md:w-12 bg-comic-red"></div>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* WHAT section */}
          <div className="comic-panel bg-comic-white relative overflow-hidden transform hover:scale-102 transition-transform duration-300">
            <div className="absolute -top-4 md:-top-6 left-4 md:-left-6 h-20 w-20 md:h-28 md:w-28 bg-comic-red rounded-full flex items-center justify-center transform rotate-12 shadow-lg z-10">
              <span className="font-bangers text-white text-2xl md:text-3xl transform -rotate-12">🔍 WHAT</span>
            </div>
            <div className="pt-20 px-4 md:px-8 pb-6 md:pb-8">
              <p className="text-comic-black font-comic text-lg md:text-xl leading-relaxed">
                The AI Village is a focused track at <span className="font-bold text-comic-red">BSides TLV</span> exploring the security implications of artificial intelligence. Through technical talks and expert discussions, we dive into topics like adversarial attacks, model red teaming, data poisoning, and the real-world risks of deploying AI in security-critical environments.
              </p>
            </div>
          </div>
          
          {/* WHY section */}
          <div className="comic-panel bg-comic-yellow relative overflow-hidden transform hover:scale-102 transition-transform duration-300">
            <div className="absolute -top-4 md:-top-6 right-4 md:-right-6 h-20 w-20 md:h-28 md:w-28 bg-comic-blue rounded-full flex items-center justify-center transform -rotate-12 shadow-lg z-10">
              <span className="font-bangers text-white text-2xl md:text-3xl transform rotate-12">❓ WHY</span>
            </div>
            <div className="pt-20 px-4 md:px-8 pb-6 md:pb-8">
              <p className="text-comic-black font-comic text-lg md:text-xl leading-relaxed">
                As AI systems are rapidly adopted across sectors—from infrastructure and finance to national security—they introduce new and often poorly understood vulnerabilities. The AI Village brings together people who can break, test, and defend these systems—sharing tools, techniques, and insights that help the wider community secure AI in practice, not just in theory.
              </p>
            </div>
          </div>

          {/* MISSION section */}
          <div className="comic-panel bg-comic-blue relative overflow-hidden transform hover:scale-102 transition-transform duration-300">
            <div className="absolute -top-4 md:-top-6 left-4 md:-left-6 h-20 w-20 md:h-28 md:w-28 bg-comic-red rounded-full flex items-center justify-center transform rotate-12 shadow-lg z-10">
              <span className="font-bangers text-white text-2xl md:text-3xl transform -rotate-12">🎯 MISSION</span>
            </div>
            <div className="pt-20 px-4 md:px-8 pb-6 md:pb-8">
              <p className="text-comic-black font-comic text-lg md:text-xl leading-relaxed">
                To grow a hands-on, technically minded community in Israel focused on the safe and secure use of AI. We aim to bridge the gap between AI developers and security professionals by encouraging research, collaboration, and open discussion.
              </p>
            </div>
          </div>
          
          {/* VISION section */}
          <div className="comic-panel bg-comic-white relative overflow-hidden transform hover:scale-102 transition-transform duration-300">
            <div className="absolute -top-4 md:-top-6 right-4 md:-right-6 h-20 w-20 md:h-28 md:w-28 bg-comic-yellow rounded-full flex items-center justify-center transform -rotate-12 shadow-lg z-10">
              <span className="font-bangers text-white text-2xl md:text-3xl transform rotate-12">🌟 VISION</span>
            </div>
            <div className="pt-20 px-4 md:px-8 pb-6 md:pb-8">
              <p className="text-comic-black font-comic text-lg md:text-xl leading-relaxed">
                A future where AI systems are built and deployed with security in mind—challenged and validated by people who understand how they can be manipulated, exploited, or fail in the real world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
