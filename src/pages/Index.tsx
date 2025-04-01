
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
  generateFAQStructuredData,
  generateOrganizationStructuredData
} from '@/utils/structuredData';

const Index = () => {
  useEffect(() => {
    // Create and add favicon link if not already present
    const addFavicon = () => {
      // Check if favicon link already exists
      const existingFavicon = document.querySelector('link[rel="icon"]');
      if (!existingFavicon) {
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = '/favicon.ico';
        favicon.type = 'image/x-icon';
        document.head.appendChild(favicon);
      }
      
      // Add additional favicon formats for better browser support
      const sizesArray = ['16x16', '32x32', '48x48'];
      sizesArray.forEach(size => {
        const existingSizedIcon = document.querySelector(`link[rel="icon"][sizes="${size}"]`);
        if (!existingSizedIcon) {
          const sizedIcon = document.createElement('link');
          sizedIcon.rel = 'icon';
          sizedIcon.type = 'image/png';
          sizedIcon.href = '/favicon.ico';
          // Use setAttribute instead of direct assignment for TypeScript compatibility
          sizedIcon.setAttribute('sizes', size);
          document.head.appendChild(sizedIcon);
        }
      });
      
      // Ensure apple-touch-icon exists
      const existingAppleIcon = document.querySelector('link[rel="apple-touch-icon"]');
      if (!existingAppleIcon) {
        const appleIcon = document.createElement('link');
        appleIcon.rel = 'apple-touch-icon';
        appleIcon.href = '/favicon.ico';
        document.head.appendChild(appleIcon);
      }
    };
    
    // Prefetch favicon
    const prefetchResources = () => {
      const links = [
        '/favicon.ico' // Main logo and favicon
      ];
      
      links.forEach(link => {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = link;
        document.head.appendChild(prefetchLink);
      });
    };
    
    // Add structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(generateEventStructuredData());
    document.head.appendChild(script);
    
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.innerHTML = JSON.stringify(generateBreadcrumbStructuredData());
    document.head.appendChild(breadcrumbScript);
    
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.innerHTML = JSON.stringify(generateFAQStructuredData());
    document.head.appendChild(faqScript);
    
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.innerHTML = JSON.stringify(generateOrganizationStructuredData());
    document.head.appendChild(orgScript);
    
    addFavicon();
    prefetchResources();
    
    // Cleanup function
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(faqScript);
      document.head.removeChild(orgScript);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
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
