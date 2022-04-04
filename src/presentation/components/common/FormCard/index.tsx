import { StCircle, StFormCard } from './style';

interface FormCardProps {
  image: string;
  title: string;
  content: string;
  children: React.ReactNode;
  theme?: 'WHITE' | 'CORAL';
}

export default function FormCard(props: FormCardProps) {
  const { image, title, content, children, theme = 'WHITE' } = props;
  return (
    <StFormCard theme={theme}>
      <img src={image} />
      <div>{content}</div>
      <div>{title}</div>
      <div>
        <StCircle />
        <hr />
        <StCircle />
      </div>
      {children}
    </StFormCard>
  );
}
