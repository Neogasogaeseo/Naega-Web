import { TeamService } from '../provider/team';

export function teamDataMock(): TeamService {
  const getIssueInfo = async () => {
    await wait(2000);
    return {
      createdAt: '2021-12-27',
      title: '깃알못이라 iOS 프로젝트가 엉켜서 망가졌다',
      category: '팀컬쳐',
      team: {
        teammates: [
          'https://ww.namu.la/s/34abe06e2ac92dc187a850f51930231b0b933b71ef9372e4ad0c4c2084b231c772ff46ccdbed58e1967cfc9415be646acb7cd18fb95d96bf16052c1634e221ea01c72f96f97a4588c0ed1a9c2f53c741723b5794cecea4f8107ad062cc84e0d4',
          'https://ww.namu.la/s/0e30b51afeaedaccb096046b25d42d73599c54d16e44e0ea6ffd88a96f81d724e9d38cc3703b7c11ba2a70a4d136b02c68d7a2559a3da2e2dbdb1066424f5728449bc216de079e38f19434a086f7081437e4f833a8aabde3674cd34188c8c839',
        ],
        thumbnail: 'https://m.media-amazon.com/images/I/61EeKaRVyUL._AC_SL1100_.jpg',
        title: '포켓몬주식회사',
      },
      issueList: [
        {
          writer: '주영주영',
          target: '서진서진',
          body: '서진아고맙다',
          createdAt: '12/20',
          keywordList: ['고마워'],
        },
        {
          writer: '효인효인',
          target: '서진서진',
          body: '서진아\n고맙다',
          createdAt: '12/20',
          keywordList: ['고마워'],
        },
        {
          writer: '지연지연',
          target: '서진서진',
          body: '서진아\n\n고맙다',
          createdAt: '12/20',
          keywordList: ['고마워'],
        },
      ],
      writer: '주영주영',
    };
  };

  return { getIssueInfo };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
