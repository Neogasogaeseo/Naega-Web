import {
  Keyword,
  MyPageKeywords,
  NeososeoAnswerBookmark,
  TeamFeedbackBookmark,
  User,
} from '@api/types/user';

export const USER_DATA: {
  KEYWORDS: Keyword[];
  KEYWORD: (content: string) => Keyword;
  INFO: (userID: string) => User;
  MY_PAGE_KEYWORD: MyPageKeywords;
  NEOSOSEO_BOOKMARK: NeososeoAnswerBookmark;
  TEAM_FEEDBACK_BOOKMARK: TeamFeedbackBookmark;
} = {
  KEYWORDS: [{ id: '0', content: '유사 사랑의 열매', color: '#4C48FF' }],
  KEYWORD: (content: string) => ({ id: '0', content, color: '#4C48FF' }),
  INFO: (userID: string) => ({
    username: '강쥐',
    userID,
    profileImage:
      'https://ww.namu.la/s/0144d366d34ef61c639d8e9305eb60c3528a0e2cfde2543ca1bce47228901c569c07111bdd0ad6b5aebb252b2d61ef02cf6ff8cf00eee0cb7652eaf5c901e14763c567024f4d2b94f490c794ceebb862',
  }),
  MY_PAGE_KEYWORD: {
    neososeo: [
      { id: '0', content: '유사 사랑의 열매', color: '#4C48FF' },
      { id: '1', content: '홍대할리스', color: '#FFB72B' },
      { id: '2', content: '강쥐바보', color: '#444444' },
      { id: '3', content: '배려왕', color: '#4C48FF' },
    ],
    team: [{ id: '1', content: '유사 사랑의 열매', color: '#4C48FF' }],
  },
  NEOSOSEO_BOOKMARK: {
    count: 3,
    answerList: [
      {
        id: 0,
        icon: 'https://oopy.lazyrockets.com/api/rest/cdn/image/edbc11fb-2504-4cc6-b907-04db8a8554da.png',
        question: '너가 닮고 싶은 나의 일잘러 모습',
        content:
          '강쥐야 너랑 작업같이 진행하면서 너가 있어서 넘 든든했어! 우리 앞으로도 꼭 같이 머머하자>< 울팀 엄마~!~!! 동해물과 백두산이 마르고 닳도록~ 하느님이 보우하사 우리 나라 만세~ 무궁화 삼천리',
        isBookmarked: true,
        keywordList: [
          { id: '0', content: '유사 사랑의 열매', color: '#4C48FF' },
          { id: '1', content: '홍대할리스', color: '#FFB72B' },
        ],
      },
      {
        id: 1,
        icon: 'https://oopy.lazyrockets.com/api/rest/cdn/image/edbc11fb-2504-4cc6-b907-04db8a8554da.png',
        question: '너가 닮고 싶은 나의 일잘러 모습',
        content:
          '강쥐야 너랑 작업같이 진행하면서 너가 있어서 넘 든든했어! 우리 앞으로도 꼭 같이 머머하자>< 울팀 엄마~!~!! 동해물과 백두산이 마르고 닳도록~ 하느님이 보우하사 우리 나라 만세~ 무궁화 삼천리',
        isBookmarked: true,
        keywordList: [
          { id: '2', content: '강쥐바보', color: '#444444' },
          { id: '3', content: '배려왕', color: '#4C48FF' },
        ],
      },
    ],
  },
  TEAM_FEEDBACK_BOOKMARK: {
    count: 3,
    teamList: [
      {
        id: 6,
        profileImage: 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
        profileName: '너가소개서',
      },
      {
        id: 1,
        profileName: 'SOPT',
      },
      {
        id: 2,
        profileName: '기업적디자인',
      },
    ],
    feedbackList: [
      {
        id: '11',
        writer: '주영주영',
        target: '서진서진',
        body: '서진아고맙다',
        createdAt: '12/20',
        keywordList: [{ id: '0', content: '유사 사랑의 열매', color: '#4C48FF' }],
        isMine: true,
        isBookmarked: true,
      },
      {
        id: '12',
        writer: '효인효인',
        target: '서진서진',
        body: '서진아\n고맙다',
        createdAt: '12/20',
        keywordList: [{ id: '0', content: '멋있는 캐서린', color: '#FF4B77' }],
        isMine: true,
        isBookmarked: true,
      },
    ],
  },
};
