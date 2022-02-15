import { StQuestion, StContent, StFlexWrapper } from './style';
import { ImgQuestionFrame } from '@assets/images';
import { splitIntoTwoLines } from '@utils/string';

export default function Question({ content }: { content: string }) {
  return (
    <StQuestion>
      <StFlexWrapper>
        <ImgQuestionFrame />
        <StContent>
          <div>Q.</div>
          <div>{splitIntoTwoLines(content)}</div>
        </StContent>
      </StFlexWrapper>
    </StQuestion>
  );
}
