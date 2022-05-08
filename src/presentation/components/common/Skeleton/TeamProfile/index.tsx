import { StTeamImage, StTeamName, StTeamProfileContainer, StTeamProfileTitle } from './style';

function TeamProfileSkeleton() {
  return (
    <>
      <StTeamProfileTitle />
      <StTeamProfileContainer>
        {new Array(2).fill('').map((_, i) => (
          <div key={i}>
            <StTeamImage />
            <StTeamName />
          </div>
        ))}
      </StTeamProfileContainer>
    </>
  );
}

export default TeamProfileSkeleton;
