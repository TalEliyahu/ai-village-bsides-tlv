
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
  
  // Force the preview image for social media platforms
  ensureSocialMediaPreviewTags();
  
  // Set a timeout to reinject tags after 1 second
  // This can help with some platforms that might strip dynamically added tags
  setTimeout(() => {
    ensureSocialMediaPreviewTags();
  }, 1000);
};

// Enhanced helper function to ensure all social media preview tags
const ensureSocialMediaPreviewTags = () => {
  // Define the high-quality image URL - use absolute URL for better compatibility
  // Add a cache-busting parameter to force fresh image load
  const timestamp = new Date().getTime();
  // For WhatsApp, static URL works better than one with parameters
  const staticImageUrl = 'https://aivillagetlv.com/Social.png';
  // Use timestamp for other platforms that might cache aggressively
  const highQualityImageUrl = `https://aivillagetlv.com/Social.png?t=${timestamp}`;
  
  // Array of social media meta properties to check and update
  const socialMetaTags = [
    // WhatsApp-specific tags - these need to be static URLs without parameters
    { property: 'og:image', content: staticImageUrl },
    { property: 'og:image:url', content: staticImageUrl },
    { property: 'og:image:secure_url', content: staticImageUrl },
    
    // Basic Open Graph tags used by most platforms
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'AI Village @ BSides TLV 2025 logo' },
    { property: 'og:title', content: 'AI Village @ BSides TLV 2025' },
    { property: 'og:description', content: 'AI Village @ BSides TLV brings together researchers, engineers, and security professionals for a focused day on AI system security, attack surfaces, and defense strategies.' },
    { property: 'og:site_name', content: 'AI Village @ BSides TLV' },
    { property: 'og:url', content: 'https://aivillagetlv.com/' },
    
    // Twitter-specific tags - critically important for Twitter cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@bsidestlv' },
    { name: 'twitter:creator', content: '@bsidestlv' },
    { name: 'twitter:image', content: highQualityImageUrl },
    { name: 'twitter:image:src', content: highQualityImageUrl }, // Additional Twitter image property
    { name: 'twitter:title', content: 'AI Village @ BSides TLV 2025' },
    { name: 'twitter:description', content: 'AI Village @ BSides TLV brings together researchers, engineers, and security professionals for a focused day on AI system security, attack surfaces, and defense strategies.' },
    { name: 'twitter:image:alt', content: 'AI Village @ BSides TLV 2025 logo' }
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
  
  // Add a preload hint for the image - important for WhatsApp
  const imageUrl = 'https://aivillagetlv.com/Social.png';
  const preloadLink = document.querySelector(`link[rel="preload"][href="${imageUrl}"]`);
  if (!preloadLink) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = imageUrl;
    link.as = 'image';
    document.head.appendChild(link);
  }
  
  // Console log for debugging
  console.log('Social media preview tags have been set/updated with timestamp:', timestamp);
};
