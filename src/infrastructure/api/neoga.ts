import { NeogaCardItem, Keywordlists, ResultFormList } from './types/neoga';

export interface NeogaService {
  getAllTemplates(viewMode: 'recent' | 'popular'): Promise<NeogaCardItem[]>;
  getResultKeywords(formID:number): Promise<Keywordlists[]>;
  getAllResultListTemplates(formID:number): Promise<ResultFormList[]>;
}
