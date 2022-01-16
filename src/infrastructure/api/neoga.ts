import { NeogaCardItem,Keywordlists,ResultFormList } from './types/neoga';

export interface NeogaService {
  getAllTemplates(viewMode: 'recent' | 'popular'): Promise<NeogaCardItem[]>;
  getResultTemplates():Promise<Keywordlists[]>;
  getAllResultListTemplates():Promise<ResultFormList[]>;
}
