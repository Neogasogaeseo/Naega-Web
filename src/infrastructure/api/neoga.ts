import { NeogaMainCardItem, NeogaCardItem, ResultFormList } from './types/neoga';
import { Keyword } from './types/user';

export interface NeogaService {
  getMainTemplate(): Promise<NeogaMainCardItem[]>;
  getAllTemplates(viewMode: 'recent' | 'popular'): Promise<NeogaCardItem[]>;
  getResultKeywords(formID: number): Promise<Keyword[]>;
  getAllResultListTemplates(formID: number): Promise<ResultFormList[]>;
}
