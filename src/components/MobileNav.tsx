
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileNav = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  
  if (!isMobile) return null;
  
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Why Attend', href: '#why-attend' },
  ];
  
  const handleLinkClick = (href: string) => {
    setOpen(false); // Close the drawer
    // Allow time for the drawer to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button 
            className="h-14 w-14 rounded-full bg-comic-red hover:bg-comic-red/90 shadow-lg flex items-center justify-center"
            aria-label="Navigation menu"
          >
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-comic-white border-4 border-comic-black">
          <div className="px-4 py-6">
            <h3 className="font-bangers text-2xl text-comic-black mb-6 text-center">
              Jump to Section
            </h3>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="w-full py-3 px-4 bg-comic-blue text-white font-bangers text-xl text-center rounded-md hover:bg-comic-blue/90 transition-colors"
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
