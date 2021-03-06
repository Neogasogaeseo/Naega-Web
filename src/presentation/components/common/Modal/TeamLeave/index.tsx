import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';

import { TeamMemberNoneId, TeamMemberWithHostInfo, TeamProfileData } from '@api/types/team';
import { StCommonModal, StDescription } from '../style';
import { IcWarning } from '@assets/icons';
import ModalWrapper from '@components/common/ModalWrapper';
import { StDelegationCheckModal, StWarningMessage } from './style';
import HostDelegationModal from '../HostDelegation';
import { useDeleteTeam } from '@queries/team';
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
    'QUESTION',
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

  const { mutate: deleteTeam } = useDeleteTeam(Number(teamID));

  const QuestionModal = (
    <StCommonModal>
      <IcWarning />
      <div>?????? ??????????????????????</div>
      <StDescription>
        {'????????? ?????????' + '\n' + '???????????? ?????? ?????? ????????? ??? ????????????.'}
      </StDescription>
      <div>
        <button onClick={closeModal}>??????</button>
        <button onClick={confirmLeave}>??????</button>
      </div>
    </StCommonModal>
  );

  const DelegationCheckModal = newHost && (
    <StDelegationCheckModal>
      <StWarningMessage>
        <div>
          <div>{newHost.profileName}</div>
          <div>????????? ????????? ????????? ????????????</div>
        </div>
        <div>?????? ??????????????????????</div>
      </StWarningMessage>
      <div>
        <button onClick={resetModal}>??????</button>
        <button onClick={confirmDelegationFinal}>??????</button>
      </div>
    </StDelegationCheckModal>
  );

  const DeleteModal = (
    <StCommonModal>
      <IcWarning />
      <div>?????? ?????????????????????????</div>
      <StDescription>
        {'?????? ????????? ?????? ?????????' + '\n' + '???????????? ?????? ??? ?????? ???????????????.'}
      </StDescription>
      <div>
        <button onClick={closeModal}>??????</button>
        <button onClick={() => deleteTeam(Number(teamID), { onSuccess: () => goTeamHome() })}>
          ??????
        </button>
      </div>
    </StCommonModal>
  );

  useEffect(() => {
    if (teamMemberList && teamMemberList.length === 1 && isUserHost) setMode('DELETE');
  }, [teamMemberList]);

  return <ModalWrapper isOpened={isOpened}> {getModal()} </ModalWrapper>;
}
