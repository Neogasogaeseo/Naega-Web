import { NeososeoFormService } from '@api/neososeo-form';
import { NeososeoAnswerData } from '@api/types/neososeo-form';
import { NEOSOSEO_FORM_DATA } from './neososeo-form.data';

export function neososeoFormDataMock(): NeososeoFormService {
  const getFormInfo = async () => {
    await wait(2000);
    return NEOSOSEO_FORM_DATA.FORM;
  };

  const postFormAnswer = async (body: NeososeoAnswerData) => {
    console.log(body);
    await wait(2000);
    return { isSuccess: true };
  };

  const postCreateForm = async (formID: number) => {
    console.log(formID);
    await wait(2000);
    return '큐';
  };

  return { getFormInfo, postFormAnswer, postCreateForm };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
