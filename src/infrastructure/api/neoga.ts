import {
  NeogaBannerItem,
  NeogaMainCardItem,
  NeogaCardItem,
  NeogaResultCardItem,
  ResultFormList,
} from './types/neoga';
import { Keyword } from './types/user';

export interface NeogaService {
  getBannerTemplate(): Promise<NeogaBannerItem>;
  getMainTemplate(): Promise<NeogaMainCardItem[]>;
  getAllTemplates(viewMode: 'recent' | 'popular'): Promise<NeogaCardItem[]>;
  getMainResultCard(): Promise<NeogaResultCardItem>;
  getFormResultCard(): Promise<NeogaResultCardItem>;
  getResultKeywords(formID: number): Promise<Keyword[]>;
  getAllResultListTemplates(formID: number): Promise<ResultFormList[]>;
  postAnswerBookmark(answerID: number): Promise<{ isSuccess: boolean }>;
  postCreateForm(formID: number, navigate: () => void): Promise<string>;
}
