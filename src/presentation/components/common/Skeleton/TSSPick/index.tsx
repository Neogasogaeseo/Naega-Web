import {
  StImage,
  StName,
  StTeamContainer,
  StTitle,
  StHeader,
  StTssTitle,
  StButton,
  StBody,
  StKeywordContainer,
  StKeyword,
  StContent,
} from './style';

function TSSPickSkeleton() {
  return (
    <>
      <StTitle />
      <StTeamContainer>
        {new Array(2).fill('').map((_, i) => (
          <div key={i}>
            <StImage />
            <StName />
          </div>
        ))}
      </StTeamContainer>
      {new Array(2).fill('').map((_, i) => (
        <div key={i}>
          <StHeader>
            <StTssTitle />
            <StButton className="button" />
          </StHeader>
          <StBody>
            <StContent />
            <StContent />
            <StKeywordContainer>
              <StKeyword />
              <StKeyword />
            </StKeywordContainer>
          </StBody>
        </div>
      ))}
    </>
  );
}

export default TSSPickSkeleton;
