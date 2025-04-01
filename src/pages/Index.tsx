
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
      
      // Add specific favicon sizes with the correct PNG files
      const sizeMap = {
        '16x16': '/favicon-16x16.png',
        '32x32': '/favicon-32x32.png',
        '48x48': '/favicon.ico' // Keep using .ico for 48x48 as we don't have a specific PNG
      };
      
      Object.entries(sizeMap).forEach(([size, path]) => {
        const existingSizedIcon = document.querySelector(`link[rel="icon"][sizes="${size}"]`);
        if (!existingSizedIcon) {
          const sizedIcon = document.createElement('link');
          sizedIcon.rel = 'icon';
          sizedIcon.type = size.includes('ico') ? 'image/x-icon' : 'image/png';
          sizedIcon.href = path;
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
        appleIcon.href = '/favicon-32x32.png'; // Use the 32x32 PNG for apple-touch-icon
        document.head.appendChild(appleIcon);
      }
    };
    
    // Prefetch resources
    const prefetchResources = () => {
      const links = [
        '/favicon.ico',
        '/favicon-16x16.png',
        '/favicon-32x32.png'
      ];
      
      links.forEach(link => {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = link;
        document.head.appendChild(prefetchLink);
      });
    };
    
    addFavicon();
    prefetchResources();
    
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
