import ProfileItem from '@components/common/ProfileItem';
import ProfileAddButton from '@components/common/ProfileAddButton';
import { StProfileListWrapper, StItemContainer } from './style';
import { Logo } from '@assets/images/index';

interface ProfileListProps {
  isSquare: boolean;
  onProfileClick: (id: number) => void;
  onAddClick: () => void;
}

function ProfileList(props: ProfileListProps) {
  const { isSquare, onProfileClick, onAddClick } = props;
  const tempData = [
    {
      id: 1,
      profileImage: Logo,
      profileName: '너가소개서',
    },
    {
      id: 2,
      profileName: 'SOPT',
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
    {
      id: 6,
      profileName: '기업적디자인',
    },
  ];

  return (
    <StProfileListWrapper>
      <StItemContainer isSquare={isSquare}>
        {tempData &&
          tempData.map(({ id, profileImage, profileName }) => (
            <ProfileItem
              key={id}
              id={id}
              profileImage={profileImage}
              profileName={profileName}
              isSquare={isSquare}
              onProfileClick={() => onProfileClick(id)}
            />
          ))}
        <ProfileAddButton isSquare={isSquare} onAddClick={onAddClick} />
      </StItemContainer>
    </StProfileListWrapper>
  );
}

export default ProfileList;
