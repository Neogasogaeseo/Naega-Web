import { useNavigate } from 'react-router-dom';

import BottomSheet from '..';
import { icEdit, icLeaveTeam, icManageTeam } from '@assets/icons';

type TeamMainBottomSheetProps = {
  isOpened: boolean;
  closeBottomSheet: () => void;
  isUserHost: boolean;
  teamID: string;
  openLeaveModal: () => void;
};

function TeamMainBottomSheet(props: TeamMainBottomSheetProps) {
  const { isOpened, closeBottomSheet, isUserHost, teamID, openLeaveModal } = props;
  const navigate = useNavigate();

  const manageTeamMember = () => {
    navigate(`/team/${teamID}/member/management`);
  };

  const navigateToEditPage = () => {
    navigate(`/team/${teamID}/edit`);
  };

  return (
    <BottomSheet
      buttonList={
        isUserHost
          ? [
              {
                icon: icManageTeam,
                label: '팀원 관리하기',
                onClick: manageTeamMember,
              },
              {
                icon: icEdit,
                label: '팀 수정하기',
                onClick: navigateToEditPage,
              },
              {
                icon: icLeaveTeam,
                label: '팀 나가기',
                onClick: openLeaveModal,
              },
            ]
          : [
              {
                icon: icLeaveTeam,
                label: '팀 나가기',
                onClick: openLeaveModal,
              },
            ]
      }
      closeBottomSheet={closeBottomSheet}
      isOpened={isOpened}
    />
  );
}

export default TeamMainBottomSheet;
