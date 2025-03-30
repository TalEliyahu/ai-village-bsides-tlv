
import React from 'react';

type Speaker = {
  name: string;
  title: string;
  organization: string;
  bio: string;
  placeholder: string;
  confirmed: boolean;
};

const SpeakersSection = () => {
  const speakers: Speaker[] = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief AI Security Researcher",
      organization: "SecureAI Labs",
      bio: "Pioneer in adversarial machine learning",
      placeholder: "SC",
      confirmed: true
    },
    {
      name: "Alex Mercer",
      title: "Red Team Lead",
      organization: "CyberForce One",
      bio: "Expert in model exploitation techniques",
      placeholder: "AM",
      confirmed: true
    },
    {
      name: "Maya Williams",
      title: "Security Engineer",
      organization: "TechSecure",
      bio: "Specialist in AI robustness testing",
      placeholder: "MW",
      confirmed: true
    },
    {
      name: "David Cohen",
      title: "Ethical Hacker",
      organization: "BreakPoint Security",
      bio: "LLM security researcher and bug hunter",
      placeholder: "DC",
      confirmed: true
    },
    {
      name: "Olivia Parker",
      title: "AI Ethics Researcher",
      organization: "Tech University",
      bio: "Focuses on fairness and bias in ML systems",
      placeholder: "OP",
      confirmed: true
    },
    {
      name: "James Wilson",
      title: "Security Architect",
      organization: "AI Defense Inc.",
      bio: "Expert in securing production AI systems",
      placeholder: "JW",
      confirmed: true
    },
    {
      name: "Speaker TBA",
      title: "Coming Soon",
      organization: "",
      bio: "Details to be announced",
      placeholder: "?",
      confirmed: false
    },
    {
      name: "Speaker TBA",
      title: "Coming Soon",
      organization: "",
      bio: "Details to be announced",
      placeholder: "?",
      confirmed: false
    }
  ];

  return (
    <section id="speakers" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-0.5 w-12 bg-comic-red"></div>
          <h2 className="font-bangers text-5xl px-4 text-white comic-text-stroke">SPEAKERS</h2>
          <div className="h-0.5 w-12 bg-comic-red"></div>
        </div>
        
        {/* Speakers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className={`comic-border ${speaker.confirmed ? 'bg-white' : 'bg-gray-100'} p-0.5 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all duration-300`}
            >
              <div className="bg-comic-black p-1">
                <div className={`aspect-square flex items-center justify-center text-5xl font-bangers ${speaker.confirmed ? 'bg-comic-red' : 'bg-gray-400'} text-white`}>
                  {speaker.placeholder}
                </div>
                
                <div className="p-4 bg-white">
                  <h3 className="font-bangers text-2xl text-comic-black">{speaker.name}</h3>
                  <p className="text-sm font-bold text-comic-red mb-1">{speaker.title}</p>
                  <p className="text-xs mb-2">{speaker.organization}</p>
                  <div className="h-0.5 w-12 bg-comic-black mb-2"></div>
                  <p className="font-comic text-sm text-gray-700">{speaker.bio}</p>
                </div>
                
                {!speaker.confirmed && (
                  <div className="absolute top-4 right-4 bg-comic-yellow p-1 transform rotate-12">
                    <p className="font-bangers text-sm text-comic-black">Coming Soon!</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
