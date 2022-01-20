import { StQuestion, StContent, StFlexWrapper } from './style';
import { ImgQuestionFrame } from '@assets/images';

export default function Question({ content }: { content: string }) {
  return (
    <StQuestion>
      <StFlexWrapper>
        <ImgQuestionFrame />
        <StContent>
          <div>Q.</div>
          <div>{content}</div>
        </StContent>
      </StFlexWrapper>
    </StQuestion>
  );
}
