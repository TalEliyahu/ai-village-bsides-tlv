
import React from 'react';

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
              <span className="font-bangers text-white text-2xl transform -rotate-12">🔍 WHAT</span>
            </div>
            <div className="pt-10 pl-10">
              <p className="text-comic-black font-comic text-lg">
                The AI Village is a focused track at <span className="font-bold text-comic-red">BSides TLV</span> exploring the security implications of artificial intelligence. Through technical talks and expert discussions, we dive into topics like adversarial attacks, model red teaming, data poisoning, and the real-world risks of deploying AI in security-critical environments.
              </p>
            </div>
          </div>
          
          <div className="comic-panel bg-comic-yellow relative overflow-hidden">
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-comic-blue rounded-full flex items-center justify-center transform -rotate-12">
              <span className="font-bangers text-white text-2xl transform rotate-12">❓ WHY</span>
            </div>
            <div className="pt-10 pr-10">
              <p className="text-comic-black font-comic text-lg">
                As AI systems are rapidly adopted across sectors—from infrastructure and finance to national security—they introduce new and often poorly understood vulnerabilities. The AI Village brings together people who can break, test, and defend these systems—sharing tools, techniques, and insights that help the wider community secure AI in practice, not just in theory.
              </p>
            </div>
          </div>

          <div className="comic-panel bg-comic-blue relative overflow-hidden">
            <div className="absolute -top-6 -left-6 h-24 w-24 bg-comic-red rounded-full flex items-center justify-center transform rotate-12">
              <span className="font-bangers text-white text-2xl transform -rotate-12">🎯 MISSION</span>
            </div>
            <div className="pt-10 pl-10">
              <p className="text-comic-black font-comic text-lg">
                To grow a hands-on, technically minded community in Israel focused on the safe and secure use of AI. We aim to bridge the gap between AI developers and security professionals by encouraging research, collaboration, and open discussion.
              </p>
            </div>
          </div>
          
          <div className="comic-panel bg-comic-white relative overflow-hidden">
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-comic-yellow rounded-full flex items-center justify-center transform -rotate-12">
              <span className="font-bangers text-white text-2xl transform rotate-12">🌟 VISION</span>
            </div>
            <div className="pt-10 pr-10">
              <p className="text-comic-black font-comic text-lg">
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
