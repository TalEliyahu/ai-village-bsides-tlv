
import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import { Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Speaker = {
  name: string;
  title: string;
  organization: string;
  placeholder: string;
  confirmed: boolean;
  linkedinUrl?: string; // Optional LinkedIn profile URL
  imageUrl?: string; // Optional image URL
  role?: string; // Optional role information
};

const SpeakersSection = () => {
  const isMobile = useIsMobile();
  
  const speakers: Speaker[] = [
    {
      name: "Daniel Liezrowice",
      title: "CEO and Co-Founder",
      organization: "Engineering Software Lab (ESL)",
      placeholder: "DL",
      confirmed: true,
      linkedinUrl: "https://www.linkedin.com/in/liezrowice/",
      imageUrl: "/lovable-uploads/ea1141e0-4dcb-4018-99ab-e00c9def11f6.png"
    },
    {
      name: "Alex Polyakov",
      title: "Co-Founder and CEO",
      organization: "Adversa AI",
      placeholder: "AP",
      confirmed: true,
      linkedinUrl: "https://www.linkedin.com/in/alex-polyakov-cyber/",
      imageUrl: "/lovable-uploads/cc5c22e5-fe60-4161-afc0-696c1e2ce783.png"
    },
    {
      name: "Vitaly Simonovich",
      title: "Threat Intelligence Researcher",
      organization: "Cato Networks",
      placeholder: "VS",
      confirmed: true,
      linkedinUrl: "https://www.linkedin.com/in/vitalysimonovich/",
      imageUrl: "/lovable-uploads/f4a226ff-8a0e-45d1-bb60-aaf51198f457.png"
    },
    {
      name: "Itamar Golan",
      title: "CEO and Co-Founder",
      organization: "Prompt Security",
      placeholder: "IG",
      confirmed: true,
      linkedinUrl: "https://www.linkedin.com/in/itamar-g1/",
      imageUrl: "/lovable-uploads/5acc5d46-6fe6-4b4c-8ec8-2e9088cf000f.png"
    },
    {
      name: "Dor Amit",
      title: "Co-Founder",
      organization: "10root Cyber Security",
      placeholder: "DA",
      confirmed: true,
      linkedinUrl: "https://www.linkedin.com/in/dor-amit-7791397/",
      imageUrl: "/lovable-uploads/321e45cd-712e-4f95-9a89-94b37070a3e6.png"
    },
    {
      name: "Elli Shlomo",
      title: "Head of Security Research",
      organization: "Guardz",
      placeholder: "ES",
      confirmed: true,
      linkedinUrl: "https://www.linkedin.com/in/elishlomo/",
      imageUrl: "/lovable-uploads/24346592-ab6d-40dc-bda8-8f708b22408f.png"
    },
    {
      name: "Ran Dubin",
      title: "CTO and Senior Lecturer",
      organization: "BUFFERZONE Security and Ariel University",
      placeholder: "RD",
      confirmed: true,
      linkedinUrl: "https://www.linkedin.com/in/dubinran/",
      imageUrl: "/lovable-uploads/e68b54a4-7599-4310-909c-7c7ee969c3d9.png"
    },
    {
      name: "Tal Skverer",
      title: "Head of Research",
      organization: "Astrix Security",
      placeholder: "TS",
      confirmed: true,
      linkedinUrl: "https://www.linkedin.com/in/reverser/",
      imageUrl: "/lovable-uploads/3b9c43df-da61-4af7-bd14-b8785cee143d.png"
    },
    {
      name: "Ziv Karliner",
      title: "Co-Founder and CTO",
      organization: "Pillar Security",
      placeholder: "ZK",
      confirmed: true,
      linkedinUrl: "https://www.linkedin.com/in/ziv-karliner-72629893/",
      imageUrl: "/lovable-uploads/51ca7cd5-565c-431f-8c23-c5427cc07cca.png"
    },
    {
      name: "Speaker TBA",
      title: "Security Researcher",
      organization: "To Be Announced",
      placeholder: "?",
      confirmed: false
    },
    {
      name: "Tal Eliyahu",
      title: "Director, Cybersecurity & Technology Innovation",
      organization: "InnovGuard",
      placeholder: "TE",
      confirmed: true,
      imageUrl: "/lovable-uploads/57b467e3-8aa6-41e7-9fae-5449489f3d3f.png",
      linkedinUrl: "https://www.linkedin.com/in/adgnji/",
      role: "AI Village Lead"
    }
  ];

  return (
    <section id="speakers" className="py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-0.5 w-8 md:w-12 bg-comic-red"></div>
          <h2 className="font-bangers text-4xl md:text-5xl px-4 text-white comic-text-stroke">SPEAKERS</h2>
          <div className="h-0.5 w-8 md:w-12 bg-comic-red"></div>
        </div>
        
        {/* Speakers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className={`comic-border ${speaker.confirmed ? 'bg-white' : 'bg-gray-100'} p-0.5 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all duration-300`}
            >
              <div className="bg-comic-black p-1 relative">
                {speaker.imageUrl ? (
                  <div className="aspect-square bg-comic-red">
                    <Avatar className="w-full h-full rounded-none">
                      <AvatarImage 
                        src={speaker.imageUrl} 
                        alt={`${speaker.name} - ${speaker.title} at ${speaker.organization}`} 
                        className="object-cover" 
                        loading="lazy"
                      />
                      <AvatarFallback className="bg-comic-red text-4xl md:text-5xl font-bangers text-white">
                        {speaker.placeholder}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                ) : (
                  <div className={`aspect-square flex items-center justify-center text-4xl md:text-5xl font-bangers ${speaker.confirmed ? 'bg-comic-red' : 'bg-gray-400'} text-white`}>
                    {speaker.placeholder}
                  </div>
                )}
                
                <div className="p-3 bg-white">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bangers text-xl md:text-2xl text-comic-black">{speaker.name}</h3>
                    {speaker.linkedinUrl && (
                      <a 
                        href={speaker.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-comic-blue hover:text-comic-red transition-colors"
                        aria-label={`${speaker.name}'s LinkedIn profile`}
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm font-bold text-comic-red mb-1">{speaker.title} @ {speaker.organization}</p>
                  {speaker.role && (
                    <p className="text-sm font-bold text-comic-blue">{speaker.role}</p>
                  )}
                  <div className="h-0.5 w-12 bg-comic-black mb-1"></div>
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
