import { useEffect, useState } from 'react';
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
  closeBottomSheet: () => void;
}

export default function TeamLeaveModal(props: TeamLeaveModalProps) {
  const { isOpened, teamMemberList, closeModal, isUserHost, closeBottomSheet } = props;
  const teamMemberListWithoutHost = teamMemberList.filter((member) => !member.isHost);
  const [mode, setMode] = useState<'QUESTION' | 'DELEGATION' | 'DELEGATION_CHECK'>('QUESTION');
  const [newHost, setNewHost] = useState<TeamMemberNoneId | null>(null);
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
        return { profileList: old ? old.profileList.filter((o) => o.id === Number(teamID)) : [] };
      });
    },
  });

  const resetModal = () => {
    closeModal();
    setMode('QUESTION');
  };

  const goTeamHome = () => {
    resetModal();
    closeBottomSheet();
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
    }
  };

  const clickLeaveConfirm = () => {
    if (teamMemberList.length > 1 && isUserHost) {
      setMode('DELEGATION');
    } else {
      mutateLeave();
      goTeamHome();
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
        <button
          onClick={() => {
            mutateDelegate();
            goTeamHome();
          }}
        >
          확인
        </button>
      </div>
    </StDelegationCheckModal>
  );

  useEffect(() => {
    setNewHost(() => {
      const firstMember =
        teamMemberList.length === 1 && isUserHost
          ? teamMemberList[0]
          : teamMemberListWithoutHost[0];
      return {
        id: firstMember.id,
        profileImage: firstMember.profileImage,
        profileName: firstMember.profileName,
      };
    });
  }, []);

  return <ModalWrapper isOpened={isOpened}> {getModal()} </ModalWrapper>;
}
