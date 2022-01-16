import { NeososeoAnswerData, NeososeoFormData } from '@api/types/neososeo-form';
import { atom } from 'recoil';

export const neososeoFormState = atom<NeososeoFormData | null>({
  key: 'neososeoFormState',
  default: null,
});

export const neoseosoAnswerState = atom<NeososeoAnswerData>({
  key: 'neoseosoAnswerState',
  default: {
    userID: 0,
    formID: 0,
    name: '',
    relation: '',
    answer: '',
    keyword: [],
  },
});
