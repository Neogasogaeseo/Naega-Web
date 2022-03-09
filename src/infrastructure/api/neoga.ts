import {
  NeogaBannerItem,
  NeogaMainCardItem,
  NeogaCardItem,
  NeogaResultCardItem,
  ResultFormList,
  CreateFormInfo,
  ResultDetail,
  ResultFeedback,
} from './types/neoga';
import { Keyword } from './types/user';

export interface NeogaService {
  getBannerTemplate(): Promise<NeogaBannerItem | null>;
  getMainTemplate(): Promise<NeogaMainCardItem[]>;
  getAllTemplates(viewMode: 'recent' | 'popular'): Promise<NeogaCardItem[]>;
  getMainResultCard(): Promise<NeogaResultCardItem>;
  getFormResultCard(): Promise<NeogaResultCardItem>;
  getResultKeywords(formID: number): Promise<Keyword[]>;
  getAllResultListTemplates(formID: number): Promise<ResultFormList[]>;
  postAnswerBookmark(answerID: number): Promise<{ isSuccess: boolean }>;
  postCreateForm(formID: number): Promise<{ isCreated: boolean; q: string }>;
  getCreateFormInfo(formID: number): Promise<CreateFormInfo>;
  getNeososeoInfo(formID: number): Promise<ResultDetail>;
  getNeososeoFeedback(formID: number): Promise<ResultFeedback>;
}
