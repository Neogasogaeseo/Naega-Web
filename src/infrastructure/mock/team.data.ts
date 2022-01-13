import { IssueData, TeamIssueData, TeamProfileData } from '@api/types/team';

export const TEAM_DATA: {
  ISSUE_INFO: IssueData;
  TEAM_ISSUE_INFO: TeamIssueData;
  TEAM_PROFILE: TeamProfileData;
} = {
  ISSUE_INFO: {
    createdAt: '2021-12-27',
    title: '깃알못이라 iOS 프로젝트가 \n엉켜서 망가졌다',
    category: '팀컬쳐',
    team: {
      teammates: [
        {
          id: '1',
          profileName: '주영주영',
          profileImage:
            'https://ww.namu.la/s/b2d724ec88064819836995aa7afe60619c0f89cf045b7f2070f8831f2b00afba7448a1b98099e4a3a729c2b541204bb06eacd71768e57446bbd625a2a630d7f279bff5fc3180ae96b2f7e2c5233482c24a97f8523fc9085cce2f9374fdf3a0b8',
        },
        {
          id: '2',
          profileName: '효인효인',
          profileImage:
            'https://ww.namu.la/s/0e30b51afeaedaccb096046b25d42d73599c54d16e44e0ea6ffd88a96f81d724e9d38cc3703b7c11ba2a70a4d136b02c68d7a2559a3da2e2dbdb1066424f5728449bc216de079e38f19434a086f7081437e4f833a8aabde3674cd34188c8c839',
        },
        {
          id: '3',
          profileName: '지연지연',
          profileImage:
            'https://ww.namu.la/s/73448969f15f0b462181de8c3fbee648fb398c0e49b9b2376b87a0d0176b790d301d604b944ea4fb3ed2311c6207b5efee83afcee194b5fb89521efcc037bc4fce76b86a1fe6f6336e92a547d138f815',
        },
      ],
      thumbnail:
        'https://w.namu.la/s/cf540b42db6aa012f45ec8e7eada6fb14c0578dddc81705a6a65ce649036c7870be294ad2c2c8163819de544dcde5faaa50df4c4d1c52fa21da8b1aa86479abbc25c7254c3019843510ff3e9e39ff9eec48b20008ab7962248d4146108618d29',
      title: '포켓몬주식회사',
    },
    issueList: [
      {
        id: '11',
        writer: '주영주영',
        target: '서진서진',
        body: '서진아고맙다',
        createdAt: '12/20',
        keywordList: [{ id: '0', content: '유사 사랑의 열매', color: '#4C48FF' }],
        isMine: true,
        isBookmarked: false,
      },
      {
        id: '12',
        writer: '효인효인',
        target: '서진서진',
        body: '서진아\n고맙다',
        createdAt: '12/20',
        keywordList: [{ id: '0', content: '멋있는 캐서린', color: '#FF4B77' }],
        isMine: true,
        isBookmarked: false,
      },
      {
        id: '13',
        writer: '지연지연',
        target: '서진서진',
        body: '서진아\n\n고맙다',
        createdAt: '12/20',
        keywordList: [
          { id: '0', content: '유사 사랑의 열매', color: '#4C48FF' },
          { id: '1', content: '멋있는 캐서린', color: '#FF4B77' },
        ],
        isMine: true,
        isBookmarked: true,
      },
      {
        id: '14',
        writer: '서진서진',
        target: '주영주영',
        body: '주영언니\n\n고맙다',
        createdAt: '12/20',
        keywordList: [
          { id: '0', content: '유사 사랑의 열매', color: '#4C48FF' },
          { id: '0', content: '멋있는 캐서린', color: '#FF4B77' },
        ],
        isMine: false,
        isBookmarked: false,
      },
    ],
    writer: '주영주영',
  },
  TEAM_ISSUE_INFO: {
    issueListData: [
      {
        teamID: '1',
        issueNumber: 1,
        category: '개발',
        dates: '2021-12-27',
        content:
          '깃알못이라 IOS 프로젝트가 엉켜서 망가졌다 깃알못이라 IOS 프로젝트가 엉켜서 망가졌다',
        issueMembers: [
          'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
          'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
          'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
          'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
          'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
        ],
        teamName: '너가소개서',
        memberName: '강쥐',
      },
      {
        teamID: '2',
        issueNumber: 2,
        issueCardImage: 'https://cdn.pixabay.com/photo/2019/03/28/10/19/sunset-4086848_1280.jpg',
        category: '팀컬쳐',
        dates: '2021-12-27',
        content: '깃알못이라 IOS 프로젝트가 엉켜서 망가졌다',
        issueMembers: [
          'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
          'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
        ],
        teamImage: 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
        teamName: '너가소개서',
        memberName: '강쥐',
      },
    ],
  },
  TEAM_PROFILE: {
    profileListData: [
      {
        id: '1',
        profileImage: 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
        profileName: '너가소개서',
      },
      {
        id: '2',
        profileName: 'SOPT',
      },
      {
        id: '3',
        profileName: '기업적디자인',
      },
      {
        id: '4',
        profileName: '기업적디자인',
      },
      {
        id: '5',
        profileName: '기업적디자인',
      },
      {
        id: '6',
        profileName: '기업적디자인',
      },
    ],
  },
};
