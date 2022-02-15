import { privateAPI } from './base';
import { IssueCategory } from '@api/types/team';

export const getTeamIssueCategory = async (): Promise<IssueCategory[] | null> => {
  const response = await privateAPI.get({ url: `/team/issue/category` });
  if (response.status === 200) {
    return response.data;
  } else throw '서버 통신 실패';
};

export const postTeamIssue = async (issueData: FormData) => {
  try {
    const response = await privateAPI
      .post({
        url: `/team/issue`,
        data: issueData,
        type: 'multipart',
      })
      .catch((error) => {
        console.error(error.response);
      });
    if (response.status === 200) {
      return response;
    } else {
      return response;
    }
  } catch (e) {
    throw '데이터 전송 실패';
  }
};
