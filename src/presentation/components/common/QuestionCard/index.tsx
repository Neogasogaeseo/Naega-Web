import { imgLinkCreated } from '@assets/images';
import { StSuggest, StCircle, StQuestionCard, StFormTitle } from './style';

interface QuestionCardProps {
  image: string;
  title: string;
  content: string;
  children: React.ReactNode;
  isBack?: boolean;
}

export default function QuestionCard(props: QuestionCardProps) {
  const { image, title, content, children, isBack = false } = props;
  return (
    <StQuestionCard isBack={isBack}>
      <img src={isBack ? imgLinkCreated : image} />
      <div>{isBack ? '너가소개서 생성 완료!' : content}</div>
      {isBack ? (
        <StSuggest>
          <div>링크를 복사해서</div>
          <div>친구들에게 공유해보세요</div>
        </StSuggest>
      ) : (
        <StFormTitle>{title}</StFormTitle>
      )}
      <div>
        <StCircle />
        <hr />
        <StCircle />
      </div>
      {children}
    </StQuestionCard>
  );
}
