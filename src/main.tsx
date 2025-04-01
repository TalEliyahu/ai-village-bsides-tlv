
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { injectStructuredData } from './utils/injectStructuredData.ts'

// Inject structured data for SEO immediately
injectStructuredData();

// Also ensure it's injected after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  injectStructuredData();
});

createRoot(document.getElementById("root")!).render(<App />);
