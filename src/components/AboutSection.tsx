
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-4 sm:py-6 px-3 sm:px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <div className="h-0.5 w-4 md:w-12 bg-comic-red"></div>
          <h2 className="font-bangers text-2xl md:text-5xl px-2 md:px-4 text-white comic-text-stroke">ABOUT THE VILLAGE</h2>
          <div className="h-0.5 w-4 md:w-12 bg-comic-red"></div>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* WHAT section */}
          <div className="comic-panel bg-comic-white relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-comic-red py-1 sm:py-2 text-center mb-2 sm:mb-3">
              <h3 className="font-bangers text-2xl sm:text-3xl text-white comic-text-stroke">🔍 WHAT</h3>
            </div>
            <div className="px-3 md:px-6 pb-3 md:pb-6">
              <p className="text-comic-black font-comic text-base md:text-xl leading-relaxed">
                The AI Village is a focused track at <span className="font-bold text-comic-red">BSides TLV</span> dedicated to the security of AI systems. Through a curated lineup of technical talks and expert-led discussions, we unpack real-world attack surfaces across AI-powered technologies — from model red teaming and prompt injection, to data poisoning, misuse, and adversarial manipulation.
              </p>
            </div>
          </div>
          
          {/* WHY section */}
          <div className="comic-panel bg-comic-yellow relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-comic-blue py-1 sm:py-2 text-center mb-2 sm:mb-3">
              <h3 className="font-bangers text-2xl sm:text-3xl text-white comic-text-stroke">❓ WHY</h3>
            </div>
            <div className="px-3 md:px-6 pb-3 md:pb-6">
              <p className="text-comic-black font-comic text-base md:text-xl leading-relaxed">
                AI systems are being deployed across every sector — from critical infrastructure to national defense — but they bring with them new, often poorly understood attack surfaces.
              </p>
              <p className="text-comic-black font-comic text-base md:text-xl leading-relaxed mt-2 sm:mt-3">
                The AI Village brings together hackers, engineers, and researchers who are actively probing these systems — sharing insights, tooling, and tradecraft to help the wider community secure AI in practice, not just in theory.
              </p>
            </div>
          </div>

          {/* MISSION section */}
          <div className="comic-panel bg-comic-blue relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-comic-red py-1 sm:py-2 text-center mb-2 sm:mb-3">
              <h3 className="font-bangers text-2xl sm:text-3xl text-white comic-text-stroke">🎯 MISSION</h3>
            </div>
            <div className="px-3 md:px-6 pb-3 md:pb-6">
              <p className="text-comic-black font-comic text-base md:text-xl leading-relaxed">
                To build a technically grounded, hands-on community in Israel focused on the secure and responsible use of AI. We aim to bridge the gap between AI practitioners and security professionals by fostering open collaboration, practical knowledge exchange, and applied research.
              </p>
            </div>
          </div>
          
          {/* VISION section */}
          <div className="comic-panel bg-comic-white relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-comic-yellow py-1 sm:py-2 text-center mb-2 sm:mb-3">
              <h3 className="font-bangers text-2xl sm:text-3xl text-white comic-text-stroke">🌟 VISION</h3>
            </div>
            <div className="px-3 md:px-6 pb-3 md:pb-6">
              <p className="text-comic-black font-comic text-base md:text-xl leading-relaxed">
                A future where AI systems are designed with security at their core — scrutinized, stress-tested, and improved by communities that understand how they can be manipulated, exploited, or fail in the real world.
              </p>
            </div>
          </div>
        </div>

        {/* WHO SHOULD JOIN section - Single paragraph format */}
        <div className="mt-4 sm:mt-8">
          <div className="comic-panel bg-comic-yellow relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 border-4 border-comic-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]">
            <div className="bg-comic-red py-1 sm:py-2 text-center mb-2 sm:mb-3">
              <h3 className="font-bangers text-2xl sm:text-4xl text-white comic-text-stroke">👥 WHO SHOULD JOIN?</h3>
            </div>
            <div className="px-3 md:px-6 pb-3 md:pb-6">
              <div className="p-2 sm:p-4 rounded-lg bg-comic-white border-2 border-comic-black">
                <p className="text-comic-black font-comic text-base sm:text-xl leading-relaxed">
                  If you're curious about how AI systems break — and how to secure them — you belong here. Whether you're a security researcher, AI practitioner, policy wonk, or hacker at heart, the AI Village is your space to engage, share, and learn.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TOPICS WE'LL COVER section */}
        <div className="mt-4 sm:mt-8">
          <div className="comic-panel bg-comic-white relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-comic-yellow py-1 sm:py-2 text-center mb-2 sm:mb-3">
              <h3 className="font-bangers text-xl sm:text-3xl text-comic-black">💬 TOPICS WE'LL COVER</h3>
            </div>
            <div className="px-3 md:px-6 pb-3 md:pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 sm:gap-y-4 gap-x-4 sm:gap-x-6">
                <div className="flex items-start">
                  <CheckCircle className="text-comic-red flex-shrink-0 mt-1 mr-2 sm:mr-3" size={18} />
                  <p className="text-comic-black font-comic text-sm sm:text-lg">Red teaming LLMs and generative AI systems</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-comic-red flex-shrink-0 mt-1 mr-2 sm:mr-3" size={18} />
                  <p className="text-comic-black font-comic text-sm sm:text-lg">Adversarial evasion and bypass techniques</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-comic-red flex-shrink-0 mt-1 mr-2 sm:mr-3" size={18} />
                  <p className="text-comic-black font-comic text-sm sm:text-lg">AI model abuse, jailbreaks, and prompt manipulation</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-comic-red flex-shrink-0 mt-1 mr-2 sm:mr-3" size={18} />
                  <p className="text-comic-black font-comic text-sm sm:text-lg">Training data attacks and poisoning</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-comic-red flex-shrink-0 mt-1 mr-2 sm:mr-3" size={18} />
                  <p className="text-comic-black font-comic text-sm sm:text-lg">Defense strategies for robust AI deployment</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-comic-red flex-shrink-0 mt-1 mr-2 sm:mr-3" size={18} />
                  <p className="text-comic-black font-comic text-sm sm:text-lg">Securing the responsible use of AI in security operations</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-comic-red flex-shrink-0 mt-1 mr-2 sm:mr-3" size={18} />
                  <p className="text-comic-black font-comic text-sm sm:text-lg">Prompt injection and indirect prompt chaining attacks</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-comic-red flex-shrink-0 mt-1 mr-2 sm:mr-3" size={18} />
                  <p className="text-comic-black font-comic text-sm sm:text-lg">AI supply chain risks (model provenance, tampering, and dependencies)</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-comic-red flex-shrink-0 mt-1 mr-2 sm:mr-3" size={18} />
                  <p className="text-comic-black font-comic text-sm sm:text-lg">Detecting AI-generated content in security workflows</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-comic-red flex-shrink-0 mt-1 mr-2 sm:mr-3" size={18} />
                  <p className="text-comic-black font-comic text-sm sm:text-lg">Interpretability and explainability in high-stakes environments</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-comic-red flex-shrink-0 mt-1 mr-2 sm:mr-3" size={18} />
                  <p className="text-comic-black font-comic text-sm sm:text-lg">Evaluating the limits of AI in incident response and threat detection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
