import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

export const enum GaCategory {
  INIT = 'init',
  LANDING = 'landing',
  TSS = 'tss',
  NSS = 'nss',
}

export const enum GaAction {
  USER_AGENT = 'user_agent',
  CLICK = 'click',
}

type GaKey = {
  category: GaCategory;
  action: GaAction;
  label?: string;
};

export function useGoogleAnalytics() {
  const [isGoogleAnalyticsLoaded, setIsGoogleAnalyticsLoaded] = useState(false);

  const makeGaEvent = ({ category, action, label }: GaKey) => {
    if (!isGoogleAnalyticsLoaded) return;
    ReactGA.event({ category, action, label });
  };

  useEffect(() => {
    ReactGA.initialize('G-4DZZ8ZJJYS');
    setIsGoogleAnalyticsLoaded(true);
  }, []);

  return { isGoogleAnalyticsLoaded, makeGaEvent };
}
