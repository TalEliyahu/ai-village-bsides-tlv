
import React from 'react';

const WhyAttendSection = () => {
  const reasons = [
    {
      emoji: "💥",
      title: "Meet the brains behind adversarial ML",
      description: "Connect with leading researchers and practitioners in the field of adversarial machine learning."
    },
    {
      emoji: "🛠️",
      title: "See real model exploits in action",
      description: "Watch live demonstrations of cutting-edge AI vulnerability exploits and attack techniques."
    },
    {
      emoji: "🧠",
      title: "Learn how to red team LLMs",
      description: "Gain practical skills for testing and securing large language models against various attack vectors."
    },
    {
      emoji: "🤝",
      title: "Connect with the AI x Sec community",
      description: "Network with cybersecurity professionals, AI researchers, and ethical hackers focused on AI security."
    }
  ];

  return (
    <section id="why-attend" className="py-20 px-4 relative bg-comic-red/10">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-0.5 w-12 bg-comic-blue"></div>
          <h2 className="font-bangers text-5xl px-4 text-white comic-text-stroke">WHY ATTEND</h2>
          <div className="h-0.5 w-12 bg-comic-blue"></div>
        </div>
        
        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="comic-panel bg-white relative overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex">
                <div className="text-5xl mr-4" role="img" aria-hidden="true">{reason.emoji}</div>
                <div>
                  <h3 className="font-bangers text-2xl text-comic-black mb-2">{reason.title}</h3>
                  <p className="font-comic text-gray-700">{reason.description}</p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 h-12 w-12 bg-comic-yellow transform rotate-12 flex items-center justify-center" aria-hidden="true">
                <span className="font-bangers text-2xl text-comic-black transform -rotate-12">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Final call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block comic-panel-slant bg-comic-blue p-8 text-white">
            <h3 className="font-bangers text-4xl mb-4">JOIN THE ADVENTURE!</h3>
            <p className="font-comic text-xl max-w-2xl mx-auto">
              Be part of the most exciting AI security event of the year. Whether you're a seasoned security professional or just curious about AI security, there's something for everyone at The AI Village!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
