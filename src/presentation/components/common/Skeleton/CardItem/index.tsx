import {
  StTitle,
  StSubtitle,
  StCardItemSkeleton,
  StCard,
  StCardHeader,
  StImage,
  StNssTitle,
  StNssContent,
  StLongText,
  StKeywordContainer,
  StKeyword,
} from './style';

function CardItemSkeleton() {
  return (
    <StCardItemSkeleton>
      <StTitle />
      <StSubtitle />
      {new Array(2).fill('').map((_, i) => (
        <StCard key={i}>
          <StCardHeader>
            <StImage />
            <div>
              <StNssTitle />
              <StNssTitle />
            </div>
          </StCardHeader>
          <StNssContent>
            <StLongText />
            <StLongText />
            <StKeywordContainer>
              <StKeyword />
              <StKeyword />
            </StKeywordContainer>
          </StNssContent>
          <StNssContent>
            <StLongText />
            <StLongText />
            <StKeywordContainer>
              <StKeyword />
              <StKeyword />
            </StKeywordContainer>
          </StNssContent>
        </StCard>
      ))}
    </StCardItemSkeleton>
  );
}

export default CardItemSkeleton;
