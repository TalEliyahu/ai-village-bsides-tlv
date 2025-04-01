
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import SpeakersSection from '@/components/SpeakersSection';
import WhyAttendSection from '@/components/WhyAttendSection';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index = () => {
  // Add structured data for event
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "The AI Village @ BSides TLV 2025",
      "description": "A focused track at BSides TLV dedicated to the security of AI systems, featuring technical talks and expert-led discussions on AI security topics.",
      "startDate": "2025-06-26T09:00:00+03:00",
      "endDate": "2025-06-26T18:00:00+03:00",
      "location": {
        "@type": "Place",
        "name": "Tel Aviv University",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tel Aviv",
          "addressRegion": "Tel Aviv District",
          "addressCountry": "IL"
        }
      },
      "image": "https://lovable.dev/opengraph-image-p98pqg.png",
      "offers": {
        "@type": "Offer",
        "url": "https://aivillage.bsidestlv.com/",
        "availability": "https://schema.org/InStock"
      },
      "organizer": {
        "@type": "Organization",
        "name": "BSides TLV",
        "url": "https://bsidestlv.com"
      },
      "keywords": "AI security, cybersecurity, machine learning, LLM, red teaming, prompt injection"
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      {/* Reduced spacing between hero and about section */}
      <div className="-mt-16 md:-mt-20"></div>
      <AboutSection />
      <SpeakersSection />
      <ScheduleSection />
      <WhyAttendSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default Index;
