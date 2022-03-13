import { keyframes } from 'styled-components';

export const ANIMATION = {
  SWIPE_UP: ({ from }: { from: number }) => keyframes`
        from {
            transform: translateY(calc(100vh - ${from}px));
        }
        to {
          transform: translateY(0);
        }
    `,
  SWIPE_DOWN: keyframes`
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(100vh);
      }
    `,
  SWIPE_FROM_RIGHT: keyframes`
    from {
        transform: translateX(100vw);
    }
    to {
      transform: translateX(0);
    }
    `,
  FADE_IN: keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,
  FADE_OUT: keyframes`
      from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`,
};
