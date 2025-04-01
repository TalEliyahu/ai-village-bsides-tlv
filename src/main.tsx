
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { injectStructuredData } from './utils/injectStructuredData.ts'

// Inject structured data for SEO immediately
injectStructuredData();

// Also ensure it's injected after DOM is fully loaded
window.addEventListener('load', () => {
  injectStructuredData();
  
  // Additional injection with delay to ensure social media tags are present
  // This can help with platforms that parse the page after initial load
  setTimeout(() => {
    injectStructuredData();
    console.log('Delayed structured data injection completed');
  }, 2000);
  
  // Extra delayed injection specifically for WhatsApp which may need more time
  setTimeout(() => {
    injectStructuredData();
    console.log('Extended delay structured data injection for WhatsApp completed');
  }, 5000);
});

createRoot(document.getElementById("root")!).render(<App />);
