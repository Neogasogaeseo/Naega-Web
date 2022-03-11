import { splitIntoTwoLines } from '@utils/string';
import { StCircle, StQuestionCard } from './style';

interface QuestionCardProps {
  image: string;
  title: string;
  content: string;
  children: React.ReactNode;
}

export default function QuestionCard(props: QuestionCardProps) {
  const { image, title, content, children } = props;
  return (
    <StQuestionCard>
      <img src={image} />
      <div>{splitIntoTwoLines(content)}</div>
      <div>{title}</div>
      <div>
        <StCircle />
        <hr />
        <StCircle />
      </div>
      {children}
    </StQuestionCard>
  );
}
