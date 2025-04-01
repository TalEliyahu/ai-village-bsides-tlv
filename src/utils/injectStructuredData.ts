
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
  
  // Force the preview image for WhatsApp and other social media by adding direct meta tags
  ensureSocialMediaPreviewTags();
};

// Enhanced helper function to ensure WhatsApp and other social media preview tags
const ensureSocialMediaPreviewTags = () => {
  // Define the high-quality image URL - use absolute URL for better compatibility
  const highQualityImageUrl = 'https://aivillagetlv.com/Social.png';
  
  // Array of social media meta properties to check and update
  const socialMetaTags = [
    // WhatsApp specific tags
    { property: 'og:image:url', content: highQualityImageUrl },
    { property: 'og:image', content: highQualityImageUrl },
    { property: 'og:image:secure_url', content: highQualityImageUrl },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'AI Village @ BSides TLV 2025 logo' },
    
    // Additional tags for better WhatsApp compatibility
    { property: 'og:title', content: 'AI Village @ BSides TLV 2025' },
    { property: 'og:description', content: 'AI Village @ BSides TLV brings together researchers, engineers, and security professionals for a focused day on AI system security, attack surfaces, and defense strategies.' },
    { property: 'og:site_name', content: 'AI Village @ BSides TLV' },
    { property: 'og:url', content: 'https://aivillagetlv.com/' },
    
    // Force cache invalidation by adding a timestamp parameter (optional)
    { name: 'twitter:image', content: `${highQualityImageUrl}?t=${new Date().getTime()}` }
  ];
  
  // Ensure each meta tag exists and has the correct value
  socialMetaTags.forEach(tag => {
    // Check if tag already exists
    const selector = tag.property 
      ? `meta[property="${tag.property}"]` 
      : `meta[name="${tag.name}"]`;
    
    let metaTag = document.querySelector(selector);
    
    // Create it if it doesn't exist, update it if it does
    if (!metaTag) {
      metaTag = document.createElement('meta');
      if (tag.property) {
        metaTag.setAttribute('property', tag.property);
      } else if (tag.name) {
        metaTag.setAttribute('name', tag.name);
      }
      document.head.appendChild(metaTag);
    }
    
    // Set or update the content
    metaTag.setAttribute('content', tag.content);
  });
  
  // Add a preload hint for the image
  const preloadLink = document.querySelector(`link[rel="preload"][href="${highQualityImageUrl}"]`);
  if (!preloadLink) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = highQualityImageUrl;
    link.as = 'image';
    document.head.appendChild(link);
  }
};
