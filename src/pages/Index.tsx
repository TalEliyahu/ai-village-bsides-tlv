
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import SpeakersSection from '@/components/SpeakersSection';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      {/* Reduced spacing between hero and about section */}
      <div className="-mt-16 md:-mt-20"></div>
      <AboutSection />
      <ScheduleSection />
      <SpeakersSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default Index;
