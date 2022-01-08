import { TeamService } from '../provider/team';

export function teamDataMock(): TeamService {
  const getIssueInfo = async () => ({
    createdAt: '2021-12-27',
    title: '깃알못이라 iOS 프로젝트가 엉켜서 망가졌다',
    category: '팀컬쳐',
    team: {
      teammates: [''],
      thumbnail: '',
      title: '',
    },
    issueList: [{ writer: '', target: '', body: '', createdAt: '12/20', keywordList: [''] }],
    writer: '',
  });

  return { getIssueInfo };
}
