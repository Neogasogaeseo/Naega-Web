import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { api } from '@api/index';
import { MAX_TEAM_MEMBER } from '@utils/constant';
import { useLoginUser } from '@hooks/useLoginUser';
import CommonNavigation from '@components/common/Navigation';
import IssueCardList from '@components/common/IssueCardList';
import TeamMainBottomSheet from '@components/common/BottomSheet/TeamMain';
import TeamMemberPopup from './MemberPopup';
import { StTeamMain, StTeamInfo, StCheckWrapper, StMemberName, StOtherMember } from './style';
import { icPerson, icCoralCheck, icGrayCheck, IcMeatball } from '@assets/icons';
import { imgEmptyProfile } from '@assets/images';

function TeamMain() {
  const navigate = useNavigate();
  const { teamID } = useParams();
  const { username } = useLoginUser();
  const [isMemberPopupOpened, setIsMemberPopupOpened] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);
  const checkMyIssue = () => setIsChecked((prev) => !prev);

  if (teamID === undefined) navigate('/');

  const { data: teamInfoData } = useQuery(['teamDetailData', teamID], () =>
    api.teamService.getTeamInfo(Number(teamID)),
  );
  const slicedMemberList = teamInfoData && teamInfoData.teamMemberList.slice(0, MAX_TEAM_MEMBER);
  const hostName = slicedMemberList && slicedMemberList[0].profileName;
  const isUserHost = username === hostName;

  const { data: teamIssueList } = useQuery(
    ['teamIssueList', teamID],
    () => api.teamService.getTeamIssue(teamID ?? ''),
    { enabled: !isChecked },
  );

  const { data: myIssueList } = useQuery(
    ['myIssueList', teamID],
    () => api.teamService.getMyIssue(teamID ?? ''),
    { enabled: isChecked },
  );

  return (
    <>
      <CommonNavigation />
      <StTeamMain>
        {teamInfoData && (
          <StTeamInfo>
            <IcMeatball onClick={() => setIsBottomSheetOpened(true)} />
            <img src={teamInfoData.teamDetail.teamImage || imgEmptyProfile} />
            <div>
              <h1>{teamInfoData.teamDetail.teamName}</h1>
              <h3>
                <button onClick={() => setIsMemberPopupOpened(!isMemberPopupOpened)}>
                  <img src={icPerson} alt="팀원" />
                  <span>{teamInfoData.teamMemberCount}명</span>
                  {isMemberPopupOpened && (
                    <TeamMemberPopup
                      members={teamInfoData.teamMemberList}
                      teamID={Number(teamID)}
                    />
                  )}
                </button>
                <div>
                  {slicedMemberList &&
                    slicedMemberList.map(({ id, profileName, isHost }, index) => (
                      <StMemberName key={id} isHost={isHost}>
                        {profileName}
                        {index + 1 < slicedMemberList.length ? ',\u00a0' : ''}
                      </StMemberName>
                    ))}
                  {teamInfoData.teamMemberCount > MAX_TEAM_MEMBER && (
                    <StOtherMember>등</StOtherMember>
                  )}
                </div>
              </h3>
              <h2>{teamInfoData.teamDetail.teamDescription}</h2>
            </div>
          </StTeamInfo>
        )}
        <button onClick={() => navigate(`/team/${teamID}/create`)}>이슈 추가</button>
        {teamIssueList?.issueList.length !== 0 && (
          <StCheckWrapper>
            <button onClick={() => checkMyIssue()}>
              <img src={isChecked ? icCoralCheck : icGrayCheck} />
            </button>
            내가 언급된 이슈만 보기
          </StCheckWrapper>
        )}
        <IssueCardList
          issueList={isChecked ? myIssueList?.issueList ?? [] : teamIssueList?.issueList ?? []}
          onIssueClick={(teamID, issueNumber) => {
            navigate(`/team/${teamID}/${issueNumber}`);
          }}
        />
      </StTeamMain>
      {teamID && (
        <TeamMainBottomSheet
          isOpened={isBottomSheetOpened}
          closeBottomSheet={() => setIsBottomSheetOpened(false)}
          isUserHost={isUserHost}
          teamID={teamID}
        />
      )}
    </>
  );
}

export default TeamMain;
