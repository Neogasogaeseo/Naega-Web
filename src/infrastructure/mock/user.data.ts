import {
  EditProfileInfo,
  Keyword,
  MyAnswerInfo,
  MyFeedbackInfo,
  MyKeywordInfo,
  MyPageInfo,
  NeososeoAnswerBookmark,
  TeamFeedbackBookmark,
} from '@api/types/user';

export const USER_DATA: {
  KEYWORDS: Keyword[];
  KEYWORD: (content: string) => Keyword;
  MY_PAGE_INFO: (userID: string) => MyPageInfo;
  NEOSOSEO_BOOKMARK: NeososeoAnswerBookmark;
  TEAM_FEEDBACK_BOOKMARK: TeamFeedbackBookmark;
  EDIT_PROFILE_INFO: EditProfileInfo;
  MY_KEYWORD_INFO: MyKeywordInfo;
  MY_ANSWER_INFO: MyAnswerInfo;
  MY_FEEDBACK_INFO: MyFeedbackInfo;
} = {
  KEYWORDS: [{ id: '0', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF' }],
  KEYWORD: (content: string) => ({ id: '0', content, color: '#4C48FF', fontColor: '#FFFFFF' }),
  MY_PAGE_INFO: (userID: string) => ({
    username: '강쥐',
    userID,
    profileImage:
      'https://ww.namu.la/s/0144d366d34ef61c639d8e9305eb60c3528a0e2cfde2543ca1bce47228901c569c07111bdd0ad6b5aebb252b2d61ef02cf6ff8cf00eee0cb7652eaf5c901e14763c567024f4d2b94f490c794ceebb862',
    neososeo: [
      { id: '0', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF' },
      { id: '1', content: '홍대할리스', color: '#FFB72B', fontColor: '#FFFFFF' },
      { id: '2', content: '강쥐바보', color: '#444444', fontColor: '#FFFFFF' },
      { id: '3', content: '배려왕왕와오앙왕왕', color: '#4C48FF', fontColor: '#FFFFFF' },
    ],
    team: [{ id: '1', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF' }],
  }),
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
          { id: '0', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF' },
          { id: '1', content: '홍대할리스', color: '#FFB72B', fontColor: '#FFFFFF' },
        ],
        targetUserID: 2,
      },
      {
        id: 1,
        icon: 'https://oopy.lazyrockets.com/api/rest/cdn/image/edbc11fb-2504-4cc6-b907-04db8a8554da.png',
        question: '너가 닮고 싶은 나의 일잘러 모습',
        content:
          '강쥐야 너랑 작업같이 진행하면서 너가 있어서 넘 든든했어! 우리 앞으로도 꼭 같이 머머하자>< 울팀 엄마~!~!! 동해물과 백두산이 마르고 닳도록~ 하느님이 보우하사 우리 나라 만세~ 무궁화 삼천리',
        isBookmarked: true,
        keywordList: [
          { id: '2', content: '강쥐바보', color: '#444444', fontColor: '#FFFFFF' },
          { id: '3', content: '배려왕', color: '#4C48FF', fontColor: '#FFFFFF' },
        ],
        targetUserID: 2,
      },
      {
        id: 2,
        icon: 'https://oopy.lazyrockets.com/api/rest/cdn/image/edbc11fb-2504-4cc6-b907-04db8a8554da.png',
        question: '너가 닮고 싶은 나의 일잘러 모습',
        content:
          '강쥐야 너랑 작업같이 진행하면서 너가 있어서 넘 든든했어! 우리 앞으로도 꼭 같이 머머하자>< 울팀 엄마~!~!! 동해물과 백두산이 마르고 닳도록~ 하느님이 보우하사 우리 나라 만세~ 무궁화 삼천리',
        isBookmarked: true,
        keywordList: [
          { id: '2', content: '강쥐바보', color: '#444444', fontColor: '#FFFFFF' },
          { id: '3', content: '배려왕', color: '#4C48FF', fontColor: '#FFFFFF' },
        ],
        targetUserID: 2,
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
        keywordList: [
          { id: '0', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF' },
        ],
        targetProfileID: 'seojin',
        isBookmarked: true,
      },
      {
        id: '12',
        writer: '효인효인',
        target: '서진서진',
        body: '서진아\n고맙다',
        createdAt: '12/20',
        keywordList: [
          { id: '0', content: '멋있는 캐서린', color: '#FF4B77', fontColor: '#FFFFFF' },
        ],
        targetProfileID: 'seojin',
        isBookmarked: true,
      },
      {
        id: '13',
        writer: '효인효인',
        target: '서진서진',
        body: '서진아\n고맙다',
        createdAt: '12/21',
        keywordList: [
          { id: '0', content: '멋있는 캐서린', color: '#FF4B77', fontColor: '#FFFFFF' },
        ],
        targetProfileID: 'seojin',
        isBookmarked: true,
      },
    ],
  },
  EDIT_PROFILE_INFO: {
    isSuccess: true,
    profileId: 'abcd',
    name: '너가소개서',
    image: 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
  },
  MY_KEYWORD_INFO: {
    totalCount: 12,
    keywordList: [
      { id: '0', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF', count: 3 },
      { id: '1', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF', count: 2 },
      { id: '2', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF', count: 1 },
      { id: '3', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF', count: 0 },
      { id: '4', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF', count: 0 },
      { id: '5', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF', count: 0 },
      { id: '6', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF', count: 0 },
      { id: '7', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF', count: 0 },
      { id: '8', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF', count: 0 },
      { id: '9', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF', count: 0 },
      { id: '10', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF', count: 0 },
      { id: '11', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF', count: 0 },
    ],
  },
  MY_ANSWER_INFO: {
    formList: [
      {
        id: 1,
        profileImage:
          'https://firebasestorage.googleapis.com/v0/b/neogasogaeseo-9aaf5.appspot.com/o/icon%2Ftxt_BL.png?alt=media&token=d322c4bf-d31b-4146-99dd-861b678c5094',
      },
      {
        id: 6,
        profileImage:
          'https://firebasestorage.googleapis.com/v0/b/neogasogaeseo-9aaf5.appspot.com/o/icon%2Fstar_BL.png?alt=media&token=fcc3d106-1ec0-40bf-8a2a-90862209751f',
      },
    ],
    answerList: [
      {
        id: 0,
        formId: 1,
        icon: 'https://oopy.lazyrockets.com/api/rest/cdn/image/edbc11fb-2504-4cc6-b907-04db8a8554da.png',
        question: '너가 닮고 싶은 나의 일잘러 모습',
        content:
          '강쥐야 너랑 작업같이 진행하면서 너가 있어서 넘 든든했어! 우리 앞으로도 꼭 같이 머머하자>< 울팀 엄마~!~!! 동해물과 백두산이 마르고 닳도록~ 하느님이 보우하사 우리 나라 만세~ 무궁화 삼천리',
        isBookmarked: true,
        keywordList: [
          { id: '0', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF' },
          { id: '1', content: '홍대할리스', color: '#FFB72B', fontColor: '#FFFFFF' },
        ],
      },
      {
        id: 1,
        formId: 1,
        icon: 'https://oopy.lazyrockets.com/api/rest/cdn/image/edbc11fb-2504-4cc6-b907-04db8a8554da.png',
        question: '너가 닮고 싶은 나의 일잘러 모습',
        content:
          '강쥐야 너랑 작업같이 진행하면서 너가 있어서 넘 든든했어! 우리 앞으로도 꼭 같이 머머하자>< 울팀 엄마~!~!! 동해물과 백두산이 마르고 닳도록~ 하느님이 보우하사 우리 나라 만세~ 무궁화 삼천리',
        isBookmarked: true,
        keywordList: [
          { id: '2', content: '강쥐바보', color: '#444444', fontColor: '#FFFFFF' },
          { id: '3', content: '배려왕', color: '#4C48FF', fontColor: '#FFFFFF' },
        ],
      },
    ],
  },
  MY_FEEDBACK_INFO: {
    teamList: [
      {
        id: 6,
        profileImage: 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
      },
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
    feedbackList: [
      {
        id: '11',
        writer: '주영주영',
        target: '서진서진',
        body: '서진아고맙다',
        createdAt: '12/20',
        keywordList: [
          { id: '0', content: '유사 사랑의 열매', color: '#4C48FF', fontColor: '#FFFFFF' },
        ],
        targetProfileID: 'seojin',
        isBookmarked: true,
      },
      {
        id: '12',
        writer: '효인효인',
        target: '서진서진',
        body: '서진아\n고맙다',
        createdAt: '12/20',
        keywordList: [
          { id: '0', content: '멋있는 캐서린', color: '#FF4B77', fontColor: '#FFFFFF' },
        ],
        targetProfileID: 'seojin',
        isBookmarked: true,
      },
      {
        id: '13',
        writer: '효인효인',
        target: '서진서진',
        body: '서진아\n고맙다',
        createdAt: '12/21',
        keywordList: [
          { id: '0', content: '멋있는 캐서린', color: '#FF4B77', fontColor: '#FFFFFF' },
        ],
        targetProfileID: 'seojin',
        isBookmarked: true,
      },
    ],
  },
};
