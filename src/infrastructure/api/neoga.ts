import {
  NeogaBannerItem,
  NeogaMainCardItem,
  NeogaCardItem,
  NeogaResultCardItem,
  CreateFormInfo,
  ResultDetail,
  ResultFeedback,
} from './types/neoga';

export interface NeogaService {
  getBannerTemplate(): Promise<NeogaBannerItem | null>;
  getMainTemplate(): Promise<NeogaMainCardItem[]>;
  getAllTemplates(viewMode: 'recent' | 'popular'): Promise<NeogaCardItem[]>;
  getMainResultCard(): Promise<NeogaResultCardItem>;
  getAllFormCard(): Promise<NeogaResultCardItem>;
  postAnswerBookmark(answerID: number): Promise<{ isSuccess: boolean }>;
  deleteAnswer(answerID: number): Promise<{ isSuccess: boolean }>;
  createForm(formID: number): Promise<{ isCreated: boolean; q: string }>;
  getCreateFormInfo(formID: number): Promise<CreateFormInfo>;
  getNeososeoInfo(formID: number): Promise<ResultDetail>;
  getNeososeoFeedback(formID: number): Promise<ResultFeedback>;
}
