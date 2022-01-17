import { StQuestion, StContent } from './style';
import { ImgQuestionFrame } from '@assets/images';

export default function Question({ content }: { content: string }) {
  return (
    <StQuestion>
      <ImgQuestionFrame />
      <StContent>
        <div>Q.</div>
        <div>{content}</div>
      </StContent>
    </StQuestion>
  );
}
