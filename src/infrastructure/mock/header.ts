import { HeaderService } from '@api/header';

export function headerMock(): HeaderService {
  const getIsNotice = async () => {
    await wait(2000);
    return true;
  };

  return {
    getIsNotice,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
