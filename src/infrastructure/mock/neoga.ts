import { NeogaService } from '@api/neoga';
import { NEOGA_DATA } from './neoga.data';

export function neogaDataMock(): NeogaService {
  const getAllTemplates = async () => {
    await wait(2000);
    return NEOGA_DATA.ALL_TEMPLATES;
  };

  const getCreatedTemplates = async () => {
    await wait(2000);
    return NEOGA_DATA.CREATED_TEMPLATES;
  };

  return { getAllTemplates, getCreatedTemplates };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
