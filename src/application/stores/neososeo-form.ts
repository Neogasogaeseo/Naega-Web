import { NeososeoAnswerData } from '@api/types/neososeo-form';
import { atom } from 'recoil';

export const neososeoAnswerState = atom<NeososeoAnswerData>({
  key: 'neososeoAnswerState',
  default: {
    userID: 0,
    formID: 0,
    name: '',
    relationID: 0,
    answer: '',
    keyword: [],
  },
});
