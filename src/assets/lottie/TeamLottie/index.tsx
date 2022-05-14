import lottie from 'lottie-web';
import NeogaLottie from './TeamLandingLottie.json';
import { useEffect, useRef } from 'react';

function TeamLandingLottie() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (container)
      lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: NeogaLottie,
      });
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '86px' }} />;
}

export default TeamLandingLottie;
