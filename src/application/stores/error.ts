import { atom } from 'recoil';

export const errorState = atom<unknown>({ key: 'errorState', default: null });
