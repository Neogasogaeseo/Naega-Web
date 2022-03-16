import { imgLinkCreated } from '@assets/images';
import { StSuggest, StCircle, StQuestionCard, StFormTitle } from './style';

interface QuestionCardProps {
  image?: string;
  title?: string;
  content?: string;
  children: React.ReactNode;
  isFront?: boolean;
}

export default function QuestionCard(props: QuestionCardProps) {
  const { image = '', title = '', content = '', children, isFront = true } = props;
  return isFront ? (
    <StQuestionCard isFront={isFront}>
      <img src={image} />
      <div>{content}</div>
      <StFormTitle>{title}</StFormTitle>
      <div>
        <StCircle />
        <hr />
        <StCircle />
      </div>
      {children}
    </StQuestionCard>
  ) : (
    <StQuestionCard isFront={isFront}>
      <img src={imgLinkCreated} />
      <div>너가소개서 생성 완료!</div>
      <StSuggest>
        <div>링크를 복사해서</div>
        <div>친구들에게 공유해보세요</div>
      </StSuggest>
      <div>
        <StCircle />
        <hr />
        <StCircle />
      </div>
      {children}
    </StQuestionCard>
  );
}
