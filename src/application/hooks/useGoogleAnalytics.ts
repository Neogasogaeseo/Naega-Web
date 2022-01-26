import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

export function useGoogleAnalytics() {
  const [isGoogleAnalyticsLoaded, setIsGoogleAnalyticsLoaded] = useState(false);

  useEffect(() => {
    ReactGA.initialize('G-4DZZ8ZJJYS');
    setIsGoogleAnalyticsLoaded(true);
  }, []);

  return { isGoogleAnalyticsLoaded };
}
