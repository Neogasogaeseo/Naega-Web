import { NeogaCardItem } from './types/neoga';

export interface NeogaService {
  getAllTemplates(viewMode: 'recent' | 'popular'): Promise<NeogaCardItem[]>;
}
