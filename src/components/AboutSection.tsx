
import React from 'react';
import { Shield, Cpu, Zap, Brain } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-0.5 w-12 bg-comic-red"></div>
          <h2 className="font-bangers text-5xl px-4 text-white comic-text-stroke">ABOUT THE VILLAGE</h2>
          <div className="h-0.5 w-12 bg-comic-red"></div>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="comic-panel bg-comic-white relative overflow-hidden">
            <div className="absolute -top-6 -left-6 h-24 w-24 bg-comic-red rounded-full flex items-center justify-center transform rotate-12">
              <span className="font-bangers text-white text-2xl transform -rotate-12">WHAT</span>
            </div>
            <div className="pt-10 pl-10">
              <p className="text-comic-black font-comic text-lg mb-4">
                <span className="font-bold text-comic-red">The AI Village</span> is a dedicated space at BSides TLV that dives deep into securing AI systems and exploring the cybersecurity implications of artificial intelligence.
              </p>
              <p className="text-comic-black font-comic text-lg">
                This year's <span className="font-bold">Comic Multiverse Edition</span> brings together the brightest minds from across the cybersecurity and AI universes to share knowledge, demonstrate exploits, and build a stronger community.
              </p>
            </div>
          </div>
          
          <div className="comic-panel bg-comic-yellow relative overflow-hidden">
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-comic-blue rounded-full flex items-center justify-center transform -rotate-12">
              <span className="font-bangers text-white text-2xl transform rotate-12">WHY</span>
            </div>
            <div className="pt-10 pr-10">
              <p className="text-comic-black font-comic text-lg mb-4">
                As AI systems become more integrated into our digital infrastructure, understanding their security vulnerabilities becomes critical for defenders and red teams alike.
              </p>
              <p className="text-comic-black font-comic text-lg">
                The AI Village creates a space where experts can exchange ideas, demonstrate new attack vectors, and collaborate on solutions that make AI systems more secure and resilient.
              </p>
            </div>
          </div>
        </div>
        
        {/* Topics */}
        <div className="mt-16">
          <h3 className="font-bangers text-3xl text-white mb-8 text-center">SUPERPOWERED TOPICS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-comic-red p-6 comic-border text-white">
              <Shield className="h-10 w-10 mb-4" />
              <h4 className="font-bangers text-xl mb-2">Adversarial Machine Learning</h4>
              <p className="font-comic text-sm">Techniques to fool AI systems and defenses against these attacks</p>
            </div>
            
            <div className="bg-comic-blue p-6 comic-border text-white">
              <Cpu className="h-10 w-10 mb-4" />
              <h4 className="font-bangers text-xl mb-2">Model Red Teaming</h4>
              <p className="font-comic text-sm">Methodologies for testing AI systems against adversarial scenarios</p>
            </div>
            
            <div className="bg-comic-yellow p-6 comic-border text-comic-black">
              <Zap className="h-10 w-10 mb-4" />
              <h4 className="font-bangers text-xl mb-2">Prompt Injection</h4>
              <p className="font-comic text-sm">Exploring the world of LLM security and how to defend against prompt-based attacks</p>
            </div>
            
            <div className="bg-comic-white p-6 comic-border text-comic-black">
              <Brain className="h-10 w-10 mb-4" />
              <h4 className="font-bangers text-xl mb-2">Data Poisoning</h4>
              <p className="font-comic text-sm">Understanding how tainted training data can compromise AI system integrity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
