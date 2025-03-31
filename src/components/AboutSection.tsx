
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { UserCheck } from 'lucide-react';

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
          <div className="comic-panel bg-comic-white relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -top-6 -left-6 h-24 w-24 md:h-28 md:w-28 bg-comic-red rounded-full flex items-center justify-center transform rotate-12 shadow-lg z-10">
              <span className="font-bangers text-white text-3xl transform -rotate-12">🔍 WHAT</span>
            </div>
            <div className="pt-16 px-6 md:px-8 pb-6 md:pb-8 mt-4">
              <p className="text-comic-black font-comic text-lg md:text-xl leading-relaxed">
                The AI Village is a focused track at <span className="font-bold text-comic-red">BSides TLV</span> dedicated to the security of AI systems. Through a curated lineup of technical talks and expert-led discussions, we unpack real-world attack surfaces across AI-powered technologies — from model red teaming and prompt injection, to data poisoning, misuse, and adversarial manipulation.
              </p>
            </div>
          </div>
          
          {/* WHY section */}
          <div className="comic-panel bg-comic-yellow relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -top-6 -right-6 h-24 w-24 md:h-28 md:w-28 bg-comic-blue rounded-full flex items-center justify-center transform -rotate-12 shadow-lg z-10">
              <span className="font-bangers text-white text-3xl transform rotate-12">❓ WHY</span>
            </div>
            <div className="pt-16 px-6 md:px-8 pb-6 md:pb-8 mt-4">
              <p className="text-comic-black font-comic text-lg md:text-xl leading-relaxed">
                AI systems are being deployed across every sector — from critical infrastructure to national defense — but they bring with them new, often poorly understood attack surfaces.
              </p>
              <p className="text-comic-black font-comic text-lg md:text-xl leading-relaxed mt-4">
                The AI Village brings together hackers, engineers, and researchers who are actively probing these systems — sharing insights, tooling, and tradecraft to help the wider community secure AI in practice, not just in theory.
              </p>
            </div>
          </div>

          {/* MISSION section */}
          <div className="comic-panel bg-comic-blue relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -top-6 -left-6 h-24 w-24 md:h-28 md:w-28 bg-comic-red rounded-full flex items-center justify-center transform rotate-12 shadow-lg z-10">
              <span className="font-bangers text-white text-3xl transform -rotate-12">🎯 MISSION</span>
            </div>
            <div className="pt-16 px-6 md:px-8 pb-6 md:pb-8 mt-4">
              <p className="text-comic-black font-comic text-lg md:text-xl leading-relaxed">
                To build a technically grounded, hands-on community in Israel focused on the secure and responsible use of AI. We aim to bridge the gap between AI practitioners and security professionals by fostering open collaboration, practical knowledge exchange, and applied research.
              </p>
            </div>
          </div>
          
          {/* VISION section */}
          <div className="comic-panel bg-comic-white relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -top-6 -right-6 h-24 w-24 md:h-28 md:w-28 bg-comic-yellow rounded-full flex items-center justify-center transform -rotate-12 shadow-lg z-10">
              <span className="font-bangers text-white text-3xl transform rotate-12">🌟 VISION</span>
            </div>
            <div className="pt-16 px-6 md:px-8 pb-6 md:pb-8 mt-4">
              <p className="text-comic-black font-comic text-lg md:text-xl leading-relaxed">
                A future where AI systems are designed with security at their core — scrutinized, stress-tested, and improved by communities that understand how they can be manipulated, exploited, or fail in the real world.
              </p>
            </div>
          </div>
        </div>

        {/* WHO SHOULD JOIN section */}
        <div className="mt-12">
          <div className="comic-panel bg-comic-red relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-24 w-24 md:h-28 md:w-28 bg-comic-blue rounded-full flex items-center justify-center shadow-lg z-10">
              <span className="font-bangers text-white text-2xl md:text-3xl">🤝 JOIN</span>
            </div>
            <div className="pt-20 px-6 md:px-8 pb-6 md:pb-8 mt-4">
              <h3 className="font-bangers text-2xl md:text-3xl text-white mb-4 text-center">WHO SHOULD JOIN?</h3>
              <p className="text-white font-comic text-lg md:text-xl leading-relaxed">
                If you're curious about how AI systems break — and how to secure them — you belong here. Whether you're a security researcher, AI practitioner, policy wonk, or hacker at heart, the AI Village is your space to engage, share, and learn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
