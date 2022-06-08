import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { TeamMemberNoneId, TeamMemberWithHostInfo, TeamProfileData } from '@api/types/team';
import { StCommonModal, StDescription } from '../style';
import { IcWarning } from '@assets/icons';
import ModalWrapper from '@components/common/ModalWrapper';
import { StDelegationCheckModal, StWarningMessage } from './style';
import HostDelegationModal from '../HostDelegation';
import { useMutation, useQueryClient } from 'react-query';
import { api } from '@api/index';

interface TeamLeaveModalProps {
  isOpened: boolean;
  teamMemberList: TeamMemberWithHostInfo[];
  closeModal: () => void;
  isUserHost: boolean;
}

export default function TeamLeaveModal(props: TeamLeaveModalProps) {
  const { isOpened, teamMemberList, closeModal, isUserHost } = props;
  const teamMemberListWithoutHost = teamMemberList.filter((member) => !member.isHost);
  const [mode, setMode] = useState<'QUESTION' | 'DELEGATION' | 'DELEGATION_CHECK' | 'DELETE'>(
    teamMemberList.length > 1 ? 'QUESTION' : 'DELETE',
  );
  const [newHost, setNewHost] = useState<TeamMemberNoneId>(teamMemberListWithoutHost[0]);
  const navigate = useNavigate();
  const { teamID } = useParams();
  const queryClient = useQueryClient();

  const leave = async () => {
    if (teamID) await api.teamService.leaveTeam(+teamID);
  };
  const { mutate: mutateLeave } = useMutation(leave, {
    onSuccess: () => {
      queryClient.setQueryData('teamProfileData', (old: TeamProfileData | undefined) => {
        return { profileList: old ? old.profileList.filter((o) => o.id !== Number(teamID)) : [] };
      });
    },
  });

  const delegate = async () => {
    if (teamID && newHost) await api.teamService.delegateHost(+teamID, newHost.id);
  };
  const { mutate: mutateDelegate } = useMutation(delegate, {
    onSuccess: () => {
      queryClient.setQueryData('teamProfileData', (old: TeamProfileData | undefined) => {
        return { profileList: old ? old.profileList.filter((o) => o.id !== Number(teamID)) : [] };
      });
    },
  });

  const resetModal = () => {
    closeModal();
    setMode('QUESTION');
    setNewHost(teamMemberListWithoutHost[0]);
  };

  const goTeamHome = () => {
    resetModal();
    navigate('/home/team');
  };

  const getModal = () => {
    switch (mode) {
      case 'QUESTION':
        return QuestionModal;
      case 'DELEGATION':
        return (
          newHost && (
            <HostDelegationModal
              teamMemberList={teamMemberList}
              newHost={newHost}
              setNewHost={(newHost: TeamMemberNoneId) => setNewHost(newHost)}
              closeModal={resetModal}
              onClickDelegateConfirm={() => setMode('DELEGATION_CHECK')}
            />
          )
        );
      case 'DELEGATION_CHECK':
        return DelegationCheckModal;
      case 'DELETE':
        return DeleteModal;
    }
  };

  const confirmLeave = () => {
    if (isUserHost) {
      setMode('DELEGATION');
    } else {
      mutateLeave();
      goTeamHome();
    }
  };

  const confirmDelegationFinal = () => {
    mutateDelegate();
    goTeamHome();
  };

  const deleteTeam = async () => {
    teamID && (await api.teamService.deleteTeam(+teamID));
    goTeamHome();
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
        <button onClick={confirmLeave}>확인</button>
      </div>
    </StCommonModal>
  );

  const DelegationCheckModal = newHost && (
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
        <button onClick={confirmDelegationFinal}>확인</button>
      </div>
    </StDelegationCheckModal>
  );

  const DeleteModal = (
    <StCommonModal>
      <IcWarning />
      <div>팀을 삭제하시겠습니까?</div>
      <StDescription>
        {'다른 팀원이 없기 때문에' + '\n' + '관리자가 나갈 시 팀이 삭제됩니다.'}
      </StDescription>
      <div>
        <button onClick={closeModal}>취소</button>
        <button onClick={deleteTeam}>확인</button>
      </div>
    </StCommonModal>
  );

  return <ModalWrapper isOpened={isOpened}> {getModal()} </ModalWrapper>;
}
