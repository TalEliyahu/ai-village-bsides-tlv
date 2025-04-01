
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
  
  // Force the preview image for WhatsApp by adding direct meta tags
  ensureWhatsAppPreviewTags();
};

// Enhanced helper function to ensure WhatsApp-specific preview tags
const ensureWhatsAppPreviewTags = () => {
  // Array of WhatsApp-specific meta properties to check and update
  const whatsAppMetaTags = [
    { property: 'og:image:url', content: 'https://aivillagetlv.com/Social.png' },
    { property: 'og:image', content: 'https://aivillagetlv.com/Social.png' },
    { property: 'og:image:secure_url', content: 'https://aivillagetlv.com/Social.png' },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'AI Village @ BSides TLV 2025 logo' }
  ];
  
  // Ensure each meta tag exists and has the correct value
  whatsAppMetaTags.forEach(tag => {
    // Check if tag already exists
    let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
    
    // Create it if it doesn't exist, update it if it does
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('property', tag.property);
      document.head.appendChild(metaTag);
    }
    
    // Set or update the content
    metaTag.setAttribute('content', tag.content);
  });
};
