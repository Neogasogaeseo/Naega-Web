import { NeososeoFormData } from '@api/types/neososeo-form';
import { atom } from 'recoil';

export const neososeoFormState = atom<NeososeoFormData | null>({
  key: 'neososeoFormState',
  default: null,
});
