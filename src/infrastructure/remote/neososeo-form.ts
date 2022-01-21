import { NeososeoFormService } from '@api/neososeo-form';
import { NeososeoAnswerData } from '@api/types/neososeo-form';
import { AxiosError } from 'axios';
import { privateAPI, publicAPI } from './base';

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
      formID: response.data.form.linkFormId,
    };
  };

  const postFormAnswer = async (body: NeososeoAnswerData) => {
    const response = await publicAPI.post({
      url: '/form/answer',
      data: {
        linkFormId: body.formID,
        name: body.name,
        relationshipId: body.relationID,
        content: body.answer,
        keywordList: body.keyword,
      },
    });
    return { isSuccess: response.status === 200 };
  };

  const postCreateForm = async (formID: number, navigate: () => void) => {
    const response = await privateAPI
      .post({
        url: `/form/create`,
        data: { formId: formID },
      })
      .catch((e: AxiosError) => {
        console.log(e.response);
      });
    if (response.status === 200 && response.message === '폼 생성 성공') {
      console.log(response.data);
      return response.data;
    } else {
      navigate();
      return response.data;
    }
  };

  return { getFormInfo, postFormAnswer, postCreateForm };
}
