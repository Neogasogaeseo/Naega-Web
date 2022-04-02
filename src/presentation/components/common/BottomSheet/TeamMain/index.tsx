import { useNavigate } from 'react-router-dom';

import BottomSheet from '..';
import { icEdit, icLeaveTeam, icManageTeam } from '@assets/icons';

type TeamMainBottomSheetProps = {
  isOpened: boolean;
  closeBottomSheet: () => void;
  isUserHost: boolean;
  teamID: string;
};

function TeamMainBottomSheet(props: TeamMainBottomSheetProps) {
  const { isOpened, closeBottomSheet, isUserHost, teamID } = props;
  const navigate = useNavigate();

  const manageTeamMember = () => {
    // 주영 언니가 이어서 작업할 부분
    console.log('팀원 관리하기');
  };

  const navigateToEditPage = () => {
    navigate(`/team/${teamID}/edit`);
  };

  const leaveTeam = () => {
    // 주영 언니가 이어서 작업할 부분
    console.log('팀 나가기 팝업');
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
                onClick: leaveTeam,
              },
            ]
          : [
              {
                icon: icLeaveTeam,
                label: '팀 나가기',
                onClick: leaveTeam,
              },
            ]
      }
      closeBottomSheet={closeBottomSheet}
      isOpened={isOpened}
    />
  );
}

export default TeamMainBottomSheet;
