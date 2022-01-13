import ProfileItem from '@components/common/ProfileItem';
import { StItemWrapper } from '@components/ProfileList/style';

interface ProfileListData {
  id: string;
  profileImage?: string;
  profileName: string;
}

interface ProfileListProps {
  isSquare: boolean;
  profiles: ProfileListData[];
  selectedProfile: ProfileListData | null;
  setSelectedProfile: (profile: ProfileListData) => void;
}

function ProfileListSelectable(props: ProfileListProps) {
  const { isSquare, profiles, selectedProfile, setSelectedProfile } = props;

  return (
    <StItemWrapper isSquare={isSquare} style={{ padding: 0 }}>
      {profiles.map(({ id, profileImage, profileName }) => (
        <ProfileItem
          key={id}
          id={id}
          profileImage={profileImage}
          profileName={profileName}
          isSquare={isSquare}
          isSelected={selectedProfile?.id === id}
          onProfileClick={() => setSelectedProfile({ id, profileImage, profileName })}
        />
      ))}
    </StItemWrapper>
  );
}

export default ProfileListSelectable;
