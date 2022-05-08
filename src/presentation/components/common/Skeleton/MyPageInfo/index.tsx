import {
  StImage,
  StKeywordContainer,
  StKeyword,
  StLongText,
  StProfile,
  StShortText,
  StSubtitle,
  StMyKeyword,
  StTitle,
} from './style';

function MyPageInfoSkeleton() {
  return (
    <>
      <StProfile>
        <StImage />
        <div>
          <StShortText />
          <StLongText />
        </div>
      </StProfile>
      <StMyKeyword>
        <StTitle />
        {new Array(2).fill('').map((_, i) => (
          <div key={i}>
            <StSubtitle />
            <StKeywordContainer>
              <StKeyword />
              <StKeyword />
              <StKeyword />
            </StKeywordContainer>
          </div>
        ))}
      </StMyKeyword>
    </>
  );
}

export default MyPageInfoSkeleton;
