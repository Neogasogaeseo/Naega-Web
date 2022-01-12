import { NeogaCardItem } from './types/neoga';

export interface NeogaService {
  getAllTemplates(): Promise<NeogaCardItem[]>;
  getCreatedTemplates(): Promise<NeogaCardItem[]>;
}
