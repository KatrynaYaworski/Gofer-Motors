import { useEffect } from 'react';

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.ampproject.org/v0/amp-iframe-0.1.js';
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // The widget will be loaded asynchronously, no need to render anything here
};

export default GoogleReviews;