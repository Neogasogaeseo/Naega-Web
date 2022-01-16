import { NeososeoAnswerData, NeososeoFormData } from './types/neososeo-form';

export interface NeososeoFormService {
  getFormInfo(userID: string, formID: string): Promise<NeososeoFormData>;
  postFormAnswer(body: NeososeoAnswerData): Promise<{ isSuccess: boolean }>;
}
