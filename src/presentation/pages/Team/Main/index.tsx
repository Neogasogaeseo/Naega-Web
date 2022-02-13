import { useNavigate, useParams } from 'react-router-dom';
import { StTeamMain, StTeamInfo, StCheckWrapper, StOtherMember } from './style';
import { icPerson, icCoralCheck, icGrayCheck } from '@assets/icons';
import IssueCardList from '@components/common/IssueCardList';
import { useState, useEffect } from 'react';
import { api } from '@api/index';
import { TeamInfoData, TeamIssueCard } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import TeamMemberPopup from './MemberPopup';

function TeamMain() {
  const [isMemberPopupOpened, setIsMemberPopupOpened] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [teamInfoData, setTeamInfoData] = useState<TeamInfoData | undefined>(undefined);
  const [issueList, setIssueList] = useState<TeamIssueCard[] | null>(null);
  const { teamID } = useParams();
  const navigate = useNavigate();
  const checkMyIssue = () => setIsChecked((prev) => !prev);
  const MAX_MEMBER = 4;
  const slicedMemberList = teamInfoData && teamInfoData.teamDetailData.teamMemberList.slice(0, 4);

  useEffect(() => {
    (async () => {
      if (teamID === undefined) return;
      const teamDetailData = await api.teamService.getTeamInfo(Number(teamID));
      setTeamInfoData(teamDetailData);
      const { issueList } = await api.teamService.getTeamIssue(teamID);
      setIssueList(issueList);
    })();
  }, []);

  useEffect(() => {
    if (teamID === undefined) return;
    if (!isChecked) {
      (async () => {
        const { issueList } = await api.teamService.getTeamIssue(teamID);
        setIssueList(issueList);
      })();
    } else {
      (async () => {
        const { issueList } = await api.teamService.getMyIssue(teamID);
        setIssueList(issueList);
      })();
    }
  }, [isChecked]);

  return (
    <StTeamMain>
      {teamInfoData && (
        <StTeamInfo>
          <div>{/* <button onClick={() => navigate(`/team/register`)}>수정</button> */}</div>
          <img src={teamInfoData.teamDetailData.teamDetail.teamImage || imgEmptyProfile} />
          <div>
            <h1>{teamInfoData.teamDetailData.teamDetail.teamName}</h1>
            <h3>
              <button onClick={() => setIsMemberPopupOpened(!isMemberPopupOpened)}>
                <img src={icPerson} alt="팀원" />
                <span>{teamInfoData.teamDetailData.teamMemberCount}명</span>
                {isMemberPopupOpened && (
                  <TeamMemberPopup members={teamInfoData.teamDetailData.teamMemberList} />
                )}
              </button>
              <div>
                {slicedMemberList &&
                  slicedMemberList.map((member, index) => (
                    <span key={member.id}>
                      {member.profileName}
                      {index + 1 < slicedMemberList.length ? ',\u00a0' : ''}
                    </span>
                  ))}
                {teamInfoData.teamDetailData.teamMemberCount > MAX_MEMBER && (
                  <StOtherMember>등</StOtherMember>
                )}
              </div>
            </h3>
            <h2>{teamInfoData.teamDetailData.teamDetail.teamDescription}</h2>
          </div>
        </StTeamInfo>
      )}
      <button onClick={() => navigate(`/team/${teamID}/create`)}>이슈 추가</button>
      <StCheckWrapper>
        <button onClick={() => checkMyIssue()}>
          <img src={isChecked ? icCoralCheck : icGrayCheck} />
        </button>
        내가 언급된 이슈만 보기
      </StCheckWrapper>
      {issueList && (
        <IssueCardList
          issueList={issueList}
          onIssueClick={(teamID, issueNumber) => {
            navigate(`/team/${teamID}/${issueNumber}`);
          }}
        />
      )}
    </StTeamMain>
  );
}

export default TeamMain;
