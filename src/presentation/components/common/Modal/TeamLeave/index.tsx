import { useState } from 'react';

import { TeamMemberNoneId, TeamMemberWithHostInfo } from '@api/types/team';
import { StCommonModal, StDescription } from '../style';
import { IcWarning } from '@assets/icons';
import ModalWrapper from '@components/common/ModalWrapper';
import { StDelegationCheckModal, StWarningMessage } from './style';
import HostDelegationModal from '../HostDelegation';

interface TeamLeaveModalProps {
  isOpened: boolean;
  teamMemberList: TeamMemberWithHostInfo[];
  closeModal: () => void;
  isUserHost: boolean;
}

export default function TeamLeaveModal(props: TeamLeaveModalProps) {
  const { isOpened, teamMemberList, closeModal, isUserHost } = props;
  const teamMemberListWithoutHost = teamMemberList.filter((member) => !member.isHost);
  const [mode, setMode] = useState<'QUESTION' | 'DELEGATION' | 'DELEGATION_CHECK'>('QUESTION');
  const firstMember = teamMemberListWithoutHost[0];
  const [newHost, setNewHost] = useState<TeamMemberNoneId>({
    id: firstMember.id,
    profileImage: firstMember.profileImage,
    profileName: firstMember.profileName,
  });

  const resetModal = () => {
    closeModal();
    setMode('QUESTION');
  };

  const getModal = () => {
    switch (mode) {
      case 'QUESTION':
        return QuestionModal;
      case 'DELEGATION':
        return (
          <HostDelegationModal
            teamMemberList={teamMemberList}
            newHost={newHost}
            setNewHost={(newHost: TeamMemberNoneId) => setNewHost(newHost)}
            closeModal={resetModal}
            onClickDelegateConfirm={() => setMode('DELEGATION_CHECK')}
          />
        );
      case 'DELEGATION_CHECK':
        return DelegationCheckModal;
    }
  };

  const clickLeaveConfirm = () => {
    if (teamMemberList.length > 1 && isUserHost) {
      setMode('DELEGATION');
    } else {
      // 팀 나가기 요청
      resetModal();
    }
  };

  const QuestionModal = (
    <StCommonModal>
      <IcWarning />
      <div>팀을 나가시겠습니까?</div>
      <StDescription>
        {'팀에서 나가면' + '\n' + '관리자의 초대 없이 복구할 수 없습니다.'}
      </StDescription>
      <div>
        <button onClick={closeModal}>취소</button>
        <button onClick={clickLeaveConfirm}>확인</button>
      </div>
    </StCommonModal>
  );

  const DelegationCheckModal = (
    <StDelegationCheckModal>
      <StWarningMessage>
        <div>
          <div>{newHost.profileName}</div>
          <div>님에게 관리자 권한을 위임하고</div>
        </div>
        <div>팀을 나가시겠습니까?</div>
      </StWarningMessage>
      <div>
        <button onClick={resetModal}>취소</button>
        <button onClick={resetModal}>확인</button>
      </div>
    </StDelegationCheckModal>
  );

  return <ModalWrapper isOpened={isOpened}> {getModal()} </ModalWrapper>;
}
