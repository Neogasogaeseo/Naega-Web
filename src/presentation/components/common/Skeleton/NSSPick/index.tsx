import {
  StTitle,
  StHeader,
  StImage,
  StNssTitle,
  StButton,
  StBody,
  StContent,
  StKeyword,
  StKeywordContainer,
} from './style';

function NSSPickSkeleton() {
  return (
    <>
      <StTitle />
      {new Array(2).fill('').map((_, i) => (
        <div key={i}>
          <StHeader>
            <StImage />
            <StNssTitle />
            <StButton />
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

export default NSSPickSkeleton;
