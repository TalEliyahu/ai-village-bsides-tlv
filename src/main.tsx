
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { injectStructuredData } from './utils/injectStructuredData.ts'

// Inject structured data for SEO immediately
injectStructuredData();

// Also ensure it's injected after DOM is fully loaded
window.addEventListener('load', () => {
  injectStructuredData();
});

createRoot(document.getElementById("root")!).render(<App />);
