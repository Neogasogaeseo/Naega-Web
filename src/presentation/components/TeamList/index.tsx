import ProfileItem from '@components/common/ProfileItem';
import ProfileAddButton from '@components/common/ProfileAddButton';
import { StTeamListWrapper, StItemContainer } from './style';
import { Logo } from '@assets/images/index';

function TeamList() {
  const tempData = [
    {
      id: 1,
      profileImage: Logo,
      profileName: 'SOPT',
    },
    {
      id: 2,
      profileName: '너가소개서',
    },
    {
      id: 3,
      profileName: '기업적디자인',
    },
    {
      id: 4,
      profileName: '기업적디자인',
    },
    {
      id: 5,
      profileName: '기업적디자인',
    },
  ];

  return (
    <StTeamListWrapper>
      <StItemContainer>
        {tempData.map(({ id, profileImage, profileName }) => (
          <ProfileItem key={id} profileImage={profileImage} profileName={profileName} />
        ))}
        <ProfileAddButton type={'team'} />
      </StItemContainer>
    </StTeamListWrapper>
  );
}

export default TeamList;
