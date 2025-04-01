
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { injectStructuredData } from './utils/injectStructuredData.ts'

// Inject structured data for SEO immediately
injectStructuredData();

// Also ensure it's injected after DOM is fully loaded
window.addEventListener('load', () => {
  injectStructuredData();
  
  // Injection with delay for general social media platforms
  setTimeout(() => {
    injectStructuredData();
    console.log('Delayed structured data injection completed for general platforms');
  }, 2000);
  
  // Delayed injection for WhatsApp, Telegram, and LinkedIn
  setTimeout(() => {
    injectStructuredData();
    console.log('Extended delay structured data injection for WhatsApp, Telegram, and LinkedIn completed');
  }, 5000);
  
  // Final attempt for slower platforms like Telegram and some LinkedIn previews
  setTimeout(() => {
    injectStructuredData();
    console.log('Final injection attempt for slower social platforms completed');
  }, 8000);
  
  // Ultra-delayed injection for the most stubborn platforms
  setTimeout(() => {
    injectStructuredData();
    console.log('Ultra-delayed final attempt for extremely slow social platforms');
  }, 12000);
});

createRoot(document.getElementById("root")!).render(<App />);
