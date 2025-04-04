
export const generateEventStructuredData = () => {
  // Add timestamp to image URL to prevent caching issues
  const imageUrl = `https://aivillagetlv.com/Social.png?t=${new Date().getTime()}`;
  
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "AI Village @ BSides TLV 2025",
    "description": "AI Village @ BSides TLV brings together researchers, engineers, and security professionals for a focused day on AI system security, attack surfaces, and defense strategies.",
    "startDate": "2025-06-26T09:00:00+03:00",
    "endDate": "2025-06-26T18:00:00+03:00",
    "location": {
      "@type": "Place",
      "name": "Tel Aviv University",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tel Aviv University Campus",
        "addressLocality": "Tel Aviv",
        "addressRegion": "Tel Aviv District",
        "postalCode": "6997801",
        "addressCountry": "IL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "32.1133",
        "longitude": "34.8044"
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": "1200",
      "height": "630",
      "encodingFormat": "image/png"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://aivillagetlv.com/",
      "price": "0",
      "priceCurrency": "ILS",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-10-01"
    },
    "organizer": {
      "@type": "Organization",
      "name": "BSides TLV",
      "url": "https://bsidestlv.com"
    },
    "performer": {
      "@type": "Person",
      "name": "AI Security Experts"
    },
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "keywords": "AI security, cybersecurity, machine learning, LLM, red teaming, prompt injection, Tel Aviv tech events, AI Village, Comic Book Multiverse"
  };
};

export const generateBreadcrumbStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aivillagetlv.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://aivillagetlv.com/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Speakers",
        "item": "https://aivillagetlv.com/#speakers"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Schedule",
        "item": "https://aivillagetlv.com/#schedule"
      }
    ]
  };
};

export const generateFAQStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is The AI Village @ BSides TLV 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI Village @ BSides TLV brings together researchers, engineers, and security professionals for a focused day on AI system security, attack surfaces, and defense strategies. This year's theme is 'Comic Book Multiverse Edition'."
        }
      },
      {
        "@type": "Question",
        "name": "When and where will the event take place?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The event will take place on June 26, 2025 from 9:00 AM to 6:00 PM at Tel Aviv University, Tel Aviv, Israel."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to attend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The AI Village @ BSides TLV 2025 is a free community event."
        }
      },
      {
        "@type": "Question",
        "name": "Who should attend The AI Village?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Security researchers, AI specialists, red teamers, blue teamers, students, and anyone interested in the intersection of AI and security should attend."
        }
      },
      {
        "@type": "Question",
        "name": "Will there be hands-on workshops at the event?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the event will feature hands-on workshops led by experienced practitioners in AI security, allowing participants to gain practical experience with modern AI vulnerabilities and security techniques."
        }
      }
    ]
  };
};

export const generateOrganizationStructuredData = () => {
  // Add timestamp to image URL to prevent caching issues
  const imageUrl = `https://aivillagetlv.com/Social.png?t=${new Date().getTime()}`;
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Village @ BSides TLV",
    "url": "https://aivillagetlv.com",
    "logo": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": "1200",
      "height": "630",
      "encodingFormat": "image/png"
    },
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": "1200",
      "height": "630",
      "encodingFormat": "image/png"
    },
    "sameAs": [
      "https://twitter.com/bsidestlv",
      "https://www.linkedin.com/company/bsides-tlv"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+972-000-0000",
      "contactType": "customer service",
      "email": "info@aivillagetlv.com",
      "availableLanguage": ["English", "Hebrew"]
    }
  };
};
