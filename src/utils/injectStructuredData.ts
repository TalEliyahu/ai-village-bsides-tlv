
import { generateEventStructuredData, generateBreadcrumbStructuredData, generateFAQStructuredData, generateOrganizationStructuredData } from './structuredData';

export const injectStructuredData = () => {
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
