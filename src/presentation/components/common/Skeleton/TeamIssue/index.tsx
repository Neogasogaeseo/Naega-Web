import {
  StTeamIssueSkeleton,
  StTeamIssueTitle,
  StTeamIssueCard,
  StTeamIssueContent,
  StCardFooter,
  StImageContainer,
  StTeamImage,
  StTeamIssueWriter,
  StTeamIssueInfo,
} from './style';

function TeamIssueSkeleton() {
  return (
    <StTeamIssueSkeleton>
      <StTeamIssueTitle />
      {new Array(3).fill('').map((_, i) => (
        <StTeamIssueCard key={i}>
          <StTeamIssueInfo />
          <StTeamIssueContent />
          <StTeamIssueContent />
          <StCardFooter>
            <StImageContainer>
              <StTeamImage />
              <StTeamImage />
              <StTeamImage />
            </StImageContainer>
            <StTeamIssueWriter />
          </StCardFooter>
        </StTeamIssueCard>
      ))}
    </StTeamIssueSkeleton>
  );
}

export default TeamIssueSkeleton;
