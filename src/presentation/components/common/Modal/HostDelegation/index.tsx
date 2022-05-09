import { TeamMemberNoneId, TeamMemberWithHostInfo } from '@api/types/team';
import ProfileListSelectable from '@components/ProfileListSelectable';
import { useMemo } from 'react';
import { StHostDelegationModal } from './style';

interface HostDelegationModalProps {
  teamMemberList: TeamMemberWithHostInfo[];
  newHost: TeamMemberNoneId;
  setNewHost: (newHost: TeamMemberNoneId) => void;
  closeModal: () => void;
  onClickDelegateConfirm: () => void;
}

export default function HostDelegationModal(props: HostDelegationModalProps) {
  const {
    teamMemberList,
    newHost,
    setNewHost,
    closeModal,
    onClickDelegateConfirm: confirmDelegation,
  } = props;
  const profileList = useMemo(
    () =>
      teamMemberList
        .filter((member) => !member.isHost)
        .map((member) => ({
          id: member.id,
          profileImage: member.profileImage ?? '',
          profileName: member.profileName,
        })),
    [teamMemberList],
  );
  return (
    <StHostDelegationModal>
      <div>관리자 권한 위임</div>
      <div>
        {'팀에 반드시 관리자가 존재해야 합니다.' + '\n' + '관리자 권한을 위임할 팀원을 선택하세요.'}
      </div>
      <ProfileListSelectable
        isSquare={false}
        profiles={profileList}
        selectedProfile={newHost}
        setSelectedProfile={setNewHost}
      />
      <div>
        <button onClick={closeModal}>취소</button>
        <button onClick={confirmDelegation}>확인</button>
      </div>
    </StHostDelegationModal>
  );
}
