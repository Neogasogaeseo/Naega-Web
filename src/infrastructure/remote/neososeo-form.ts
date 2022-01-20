import { NeososeoFormService } from '@api/neososeo-form';
import { NeososeoAnswerData } from '@api/types/neososeo-form';
import { publicAPI } from './base';

export function NeososeoFormRemote(): NeososeoFormService {
  const getFormInfo = async (q: string) => {
    const response = await publicAPI.get({ url: `/form/answer?q=${q}` });
    return {
      title: response.data.form.title,
      content: response.data.form.subtitle,
      imageSub: response.data.form.lightIconImage,
      relation: response.data.relationship.map((relation: any) => ({
        id: relation.id,
        content: relation.name,
      })),
      userName: response.data.user.name,
      userID: response.data.user.id,
      formID: response.data.form.id,
    };
  };

  const postFormAnswer = async (body: NeososeoAnswerData) => {
    console.log(body);
    await wait(2000);
    return { isSuccess: true };
  };

  return { getFormInfo, postFormAnswer };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
