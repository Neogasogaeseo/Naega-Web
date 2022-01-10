import ProfileItem from '@components/common/ProfileItem';
import { StItemWrapper } from '@components/ProfileList/style';
import React from 'react';

interface ProfileListData {
  id: number;
  profileImage?: string;
  profileName: string;
}

interface ProfileListProps {
  isSquare: boolean;
  profiles: ProfileListData[];
  selectedProfileID: ProfileListData['id'] | null;
  setSelectedProfileID: (id: number) => void;
}

function ProfileListSelectable(props: ProfileListProps) {
  const { isSquare, profiles, selectedProfileID, setSelectedProfileID } = props;

  return (
    <StItemWrapper isSquare={isSquare} style={{ padding: 0 }}>
      {profiles.map(({ id, profileImage, profileName }) => (
        <ProfileItem
          key={id}
          id={id}
          profileImage={profileImage}
          profileName={profileName}
          isSquare={isSquare}
          isSelected={selectedProfileID === id}
          onProfileClick={() => setSelectedProfileID(id)}
        />
      ))}
    </StItemWrapper>
  );
}

export default ProfileListSelectable;
