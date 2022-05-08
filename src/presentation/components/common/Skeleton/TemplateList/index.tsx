import { StTemplateListSkeleton, StLongText, StShortText, StCardContainer, StCard } from './style';

function TemplateListSkeleton() {
  return (
    <StTemplateListSkeleton>
      <StShortText />
      <StLongText />
      <StCardContainer>
        {new Array(3).fill('').map((_, i) => (
          <StCard key={i} />
        ))}
      </StCardContainer>
    </StTemplateListSkeleton>
  );
}

export default TemplateListSkeleton;
