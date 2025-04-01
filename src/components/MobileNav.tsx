
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileNav = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  if (!isMobile) return null;
  
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
  ];
  
  const handleLinkClick = (href: string) => {
    // Close the drawer immediately
    setOpen(false);
    
    // Navigate to the section with a slight delay to ensure drawer closes first
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button 
            className="h-14 w-14 rounded-full bg-comic-red hover:bg-comic-red/90 shadow-lg flex items-center justify-center"
            aria-label="Navigation menu"
          >
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-comic-white border-4 border-comic-black z-[100]">
          <div className="px-4 py-6">
            {/* Add DrawerTitle to fix accessibility warning */}
            <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
            <h3 className="font-bangers text-2xl text-comic-black mb-6 text-center" id="drawer-nav-heading">
              Jump to Section
            </h3>
            <nav className="flex flex-col gap-4" aria-labelledby="drawer-nav-heading" aria-describedby="navigation-description">
              <p id="navigation-description" className="sr-only">Select a section to navigate to</p>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="w-full py-3 px-4 bg-comic-blue text-white font-bangers text-xl text-center rounded-md hover:bg-comic-blue/90 transition-colors"
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNav;
