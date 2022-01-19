import { NeososeoFormService } from '@api/neososeo-form';
import { NeososeoAnswerData } from '@api/types/neososeo-form';
import { NEOSOSEO_FORM_DATA } from '@infrastructure/mock/neososeo-form.data';
import { privateAPI } from './base';

export function neososeoFormDataRemote(): NeososeoFormService {
  const getFormInfo = async () => {
    await wait(2000);
    return NEOSOSEO_FORM_DATA.FORM;
  };

  const postFormAnswer = async (body: NeososeoAnswerData) => {
    console.log(body);
    await wait(2000);
    return { isSuccess: true };
  };

  const postCreateForm = async (formID: number, navigate: () => void) => {
    try {
      const response = await privateAPI.post({
        url: `/form/create`,
        data: { formId: formID },
      });
      if (response.status === 200) {
        console.log(response);
        return response.data;
      } else if (response.status === 400 && response.success) {
        navigate();
      } else throw response.message;
    } catch (e) {
      console.error(e);
    }
  };

  return { getFormInfo, postFormAnswer, postCreateForm };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
