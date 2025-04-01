
import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === 'undefined') return;
    
    // Initial check
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    
    // Use a throttled resize handler for better performance
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      if (!resizeTimer) {
        resizeTimer = setTimeout(() => {
          checkIfMobile();
          resizeTimer = 0;
        }, 100);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, []);

  return isMobile;
}
