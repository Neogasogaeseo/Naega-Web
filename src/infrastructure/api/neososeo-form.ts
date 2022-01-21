import { NeososeoAnswerData, NeososeoFormData } from './types/neososeo-form';

export interface NeososeoFormService {
  getFormInfo(q: string): Promise<NeososeoFormData>;
  postFormAnswer(body: NeososeoAnswerData): Promise<{ isSuccess: boolean }>;
}
