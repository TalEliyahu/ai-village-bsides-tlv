import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import SpeakersSection from '@/components/SpeakersSection';
import WhyAttendSection from '@/components/WhyAttendSection';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const Index = () => {
  // Add structured data for event
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "The AI Village @ BSides TLV 2025 - Comic Book Multiverse Edition",
      "description": "Israel's premier AI security conference dedicated to exploring AI vulnerabilities, red teaming techniques, prompt injection attacks, and LLM security challenges. Join top security researchers and AI experts for hands-on workshops and cutting-edge discussions.",
      "startDate": "2025-06-26T09:00:00+03:00",
      "endDate": "2025-06-26T18:00:00+03:00",
      "location": {
        "@type": "Place",
        "name": "Tel Aviv University",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Tel Aviv University Campus",
          "addressLocality": "Tel Aviv",
          "addressRegion": "Tel Aviv District",
          "postalCode": "6997801",
          "addressCountry": "IL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "32.1133",
          "longitude": "34.8044"
        }
      },
      "image": "https://lovable.dev/opengraph-image-p98pqg.png",
      "offers": {
        "@type": "Offer",
        "url": "https://aivillage.bsidestlv.com/",
        "price": "0",
        "priceCurrency": "ILS",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-10-01"
      },
      "organizer": {
        "@type": "Organization",
        "name": "BSides TLV",
        "url": "https://bsidestlv.com"
      },
      "performer": {
        "@type": "Person",
        "name": "AI Security Experts"
      },
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "keywords": "AI security, cybersecurity, machine learning, LLM, red teaming, prompt injection, Tel Aviv tech events, AI Village, Comic Book Multiverse"
    });
    document.head.appendChild(script);
    
    // Add breadcrumb structured data
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aivillage.bsidestlv.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://aivillage.bsidestlv.com/#about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Speakers",
          "item": "https://aivillage.bsidestlv.com/#speakers"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Schedule",
          "item": "https://aivillage.bsidestlv.com/#schedule"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Why Attend",
          "item": "https://aivillage.bsidestlv.com/#why-attend"
        }
      ]
    });
    document.head.appendChild(breadcrumbScript);
    
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(breadcrumbScript);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hidden breadcrumb for SEO - visually hidden but accessible to screen readers and search engines */}
      <div className="sr-only">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#about">About</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#speakers">Speakers</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#schedule">Schedule</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Why Attend</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
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
