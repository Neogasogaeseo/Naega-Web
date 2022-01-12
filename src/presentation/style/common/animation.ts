import { keyframes } from 'styled-components';

export const ANIMATION = {
  SWIPE_UP: ({ from }: { from: number }) => keyframes`
        from {
            transform: translateY(calc(100vh - ${from}px));
        }
    `,
  SWIPE_FROM_RIGHT: keyframes`
    from {
        transform: translateX(100vw);
    }`,
  FADE_IN: keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,
};
