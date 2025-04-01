
import { generateEventStructuredData, generateBreadcrumbStructuredData, generateFAQStructuredData, generateOrganizationStructuredData } from './structuredData';

export const injectStructuredData = () => {
  // Remove any existing structured data scripts to avoid duplicates
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(script => script.remove());

  const structuredDataElements = [
    generateEventStructuredData(),
    generateBreadcrumbStructuredData(),
    generateFAQStructuredData(),
    generateOrganizationStructuredData()
  ];

  structuredDataElements.forEach(data => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  });
  
  // Force the preview image for WhatsApp by adding a direct meta tag
  ensureWhatsAppPreviewTag();
};

// Helper function to ensure WhatsApp-specific preview tag
const ensureWhatsAppPreviewTag = () => {
  // Remove any existing whatsapp-specific meta tags to avoid duplicates
  const existingTags = document.querySelectorAll('meta[property="og:image:url"]');
  existingTags.forEach(tag => tag.remove());
  
  // Create a WhatsApp-specific meta tag (some versions of WhatsApp look for this)
  const whatsappMeta = document.createElement('meta');
  whatsappMeta.setAttribute('property', 'og:image:url');
  whatsappMeta.setAttribute('content', 'https://aivillagetlv.com/Social.png');
  document.head.appendChild(whatsappMeta);
};
