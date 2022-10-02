import { NeososeoFormService } from '@api/neososeo-form';
import { NeososeoAnswerData } from '@api/types/neososeo-form';
import { STATUS_CODE } from '@utils/constant';
import { removeSpecialCharacters } from '@utils/string';
import { publicAPI } from './base';

export function NeososeoFormRemote(): NeososeoFormService {
  const getFormInfo = async (q: string) => {
    const response = await publicAPI.get({ url: `/form/answer?q=${q}` });
    const userName = response.data.user.name;
    return {
      title: removeSpecialCharacters(response.data.form.title).replaceAll('{{user}}', userName),
      content: response.data.form.subtitle.replace('\\n', '\n').replaceAll('{{user}}', userName),
      imageSub: response.data.form.darkIconImage,
      relation: response.data.relationship.map((relation: any) => ({
        id: relation.id,
        content: relation.name,
      })),
      userName: response.data.user.name,
      userID: response.data.user.id,
      formID: response.data.form.linkFormId,
      userProfileImage: response.data.user.image,
      answerCount: response.data.answerCount,
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
    return { isSuccess: response.status === STATUS_CODE.OK };
  };

  return { getFormInfo, postFormAnswer };
}
