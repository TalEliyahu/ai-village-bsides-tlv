
import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";

type Speaker = {
  name: string;
  title: string;
  organization: string;
  placeholder: string;
  confirmed: boolean;
};

const SpeakersSection = () => {
  const isMobile = useIsMobile();
  
  const speakers: Speaker[] = [
    {
      name: "Daniel Liezrowice",
      title: "CEO and Co-Founder",
      organization: "Engineering Software Lab (ESL)",
      placeholder: "DL",
      confirmed: true
    },
    {
      name: "Alex Polyakov",
      title: "Co-Founder and CEO",
      organization: "Adversa AI",
      placeholder: "AP",
      confirmed: true
    },
    {
      name: "Vitaly Simonovich",
      title: "Threat Intelligence Researcher",
      organization: "Cato Networks",
      placeholder: "VS",
      confirmed: true
    },
    {
      name: "Itamar Golan",
      title: "CEO and Co-Founder",
      organization: "Prompt Security",
      placeholder: "IG",
      confirmed: true
    },
    {
      name: "Dor Amit",
      title: "Co-Founder",
      organization: "10root Cyber Security",
      placeholder: "DA",
      confirmed: true
    },
    {
      name: "Elli Shlomo",
      title: "Head of Security Research",
      organization: "Guardz",
      placeholder: "ES",
      confirmed: true
    },
    {
      name: "Ran Dubin",
      title: "CTO and Senior Lecturer",
      organization: "BUFFERZONE Security and Ariel University",
      placeholder: "RD",
      confirmed: true
    },
    {
      name: "Tal Skverer",
      title: "Head of Research",
      organization: "Astrix Security",
      placeholder: "TS",
      confirmed: true
    },
    {
      name: "Ziv Karliner",
      title: "Co-Founder and CTO",
      organization: "Pillar Security",
      placeholder: "ZK",
      confirmed: true
    },
    {
      name: "Speaker TBA",
      title: "Security Researcher",
      organization: "To Be Announced",
      placeholder: "?",
      confirmed: false
    }
  ];

  return (
    <section id="speakers" className="py-16 md:py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="flex items-center justify-center mb-12 md:mb-16">
          <div className="h-0.5 w-8 md:w-12 bg-comic-red"></div>
          <h2 className="font-bangers text-4xl md:text-5xl px-4 text-white comic-text-stroke">SPEAKERS</h2>
          <div className="h-0.5 w-8 md:w-12 bg-comic-red"></div>
        </div>
        
        {/* Speakers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className={`comic-border ${speaker.confirmed ? 'bg-white' : 'bg-gray-100'} p-0.5 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all duration-300`}
            >
              <div className="bg-comic-black p-1 relative">
                <div className={`aspect-square flex items-center justify-center text-4xl md:text-5xl font-bangers ${speaker.confirmed ? 'bg-comic-red' : 'bg-gray-400'} text-white`}>
                  {speaker.placeholder}
                </div>
                
                <div className="p-4 bg-white">
                  <h3 className="font-bangers text-xl md:text-2xl text-comic-black">{speaker.name}</h3>
                  <p className="text-sm font-bold text-comic-red mb-1">{speaker.title} @ {speaker.organization}</p>
                  <div className="h-0.5 w-12 bg-comic-black mb-2"></div>
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
