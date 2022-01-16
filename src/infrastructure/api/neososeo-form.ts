import { NeososeoAnswerData, NeososeoFormData } from './types/neososeo-form';

export interface NeososeoFormService {
  getFormInfo(userID: number, formID: number): Promise<NeososeoFormData>;
  postFormAnswer(body: NeososeoAnswerData): Promise<{ isSuccess: boolean }>;
}
