
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { injectStructuredData } from './utils/injectStructuredData.ts'

// Inject structured data for SEO
document.addEventListener('DOMContentLoaded', () => {
  injectStructuredData();
});

createRoot(document.getElementById("root")!).render(<App />);
