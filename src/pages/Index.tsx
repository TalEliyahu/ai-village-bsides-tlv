import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import SpeakersSection from '@/components/SpeakersSection';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import MobileNav from '@/components/MobileNav';
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { 
  generateEventStructuredData, 
  generateBreadcrumbStructuredData, 
  generateFAQStructuredData 
} from '@/utils/structuredData';

const Index = () => {
  // Add structured data for event
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(generateEventStructuredData());
    document.head.appendChild(script);
    
    // Add breadcrumb structured data
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.innerHTML = JSON.stringify(generateBreadcrumbStructuredData());
    document.head.appendChild(breadcrumbScript);
    
    // Add FAQ structured data
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.innerHTML = JSON.stringify(generateFAQStructuredData());
    document.head.appendChild(faqScript);
    
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(faqScript);
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
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <ScheduleSection />
      <Footer />
      <ScrollToTopButton />
      <MobileNav />
    </main>
  );
};

export default Index;
