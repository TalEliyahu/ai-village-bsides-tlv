
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Initialize with undefined to avoid hydration mismatch
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Function to check if the viewport width is mobile
    const checkIsMobile = () => {
      return window.innerWidth < MOBILE_BREAKPOINT;
    };
    
    // Set the initial value
    setIsMobile(checkIsMobile());
    
    // Create event listener
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    // Add event listener with throttling to improve performance
    let resizeTimer: number | undefined;
    const throttledResize = () => {
      if (resizeTimer) {
        window.clearTimeout(resizeTimer);
      }
      resizeTimer = window.setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", throttledResize);
    
    // Clean up
    return () => {
      window.removeEventListener("resize", throttledResize);
      if (resizeTimer) {
        window.clearTimeout(resizeTimer);
      }
    };
  }, []);

  // Return false when on the server or when the state hasn't been determined yet
  // to avoid hydration mismatches
  return isMobile === undefined ? false : isMobile;
}
