import ProfileItem from '@components/common/ProfileItem';
import { StItemWrapper, StProfileListWrapper } from '@components/ProfileList/style';
import React from 'react';

interface ProfileListData {
  id: number;
  profileImage?: string;
  profileName: string;
}

interface ProfileListProps {
  isSquare: boolean;
  profiles: ProfileListData[];
  selectedProfileID: ProfileListData['id'];
  setSelectedProfileID: (id: number) => void;
}

function ProfileListSelectable(props: ProfileListProps) {
  const { isSquare, profiles, selectedProfileID, setSelectedProfileID } = props;

  return (
    <StProfileListWrapper>
      <StItemWrapper isSquare={isSquare}>
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
    </StProfileListWrapper>
  );
}

export default ProfileListSelectable;
