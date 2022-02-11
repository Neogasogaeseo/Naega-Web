import { NeososeoFormService } from '@api/neososeo-form';
import { NEOSOSEO_FORM_DATA } from './neososeo-form.data';

export function NeososeoFormMock(): NeososeoFormService {
  const getFormInfo = async () => {
    await wait(2000);
    return NEOSOSEO_FORM_DATA.FORM;
  };

  const postFormAnswer = async () => {
    await wait(2000);
    return { isSuccess: true };
  };

  return { getFormInfo, postFormAnswer };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
