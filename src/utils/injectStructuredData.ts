
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
};
