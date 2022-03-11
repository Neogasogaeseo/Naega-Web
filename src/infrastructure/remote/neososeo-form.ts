import { NeososeoFormService } from '@api/neososeo-form';
import { NeososeoAnswerData } from '@api/types/neososeo-form';
import { publicAPI } from './base';

export function NeososeoFormRemote(): NeososeoFormService {
  const getFormInfo = async (q: string) => {
    const response = await publicAPI.get({ url: `/form/answer?q=${q}` });
    return {
      title: response.data.form.title,
      content: response.data.form.subtitle.replace('\\n', '\n'),
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

  return { getFormInfo, postFormAnswer };
}
