import { NeososeoFormService } from '@api/neososeo-form';
import { NEOSOSEO_FORM_DATA } from './neososeo-form.data';

export function neososeoFormDataMock(): NeososeoFormService {
  const getFormInfo = async () => {
    await wait(2000);
    return NEOSOSEO_FORM_DATA.FORM;
  };

  return { getFormInfo };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
