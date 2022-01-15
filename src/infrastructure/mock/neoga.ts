import { NeogaService } from '@api/neoga';
import { NEOGA_DATA } from './neoga.data';

export function neogaDataMock(): NeogaService {
  const getAllTemplates = async () => {
    await wait(2000);
    return NEOGA_DATA.ALL_TEMPLATES;
  };

  return { getAllTemplates };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
