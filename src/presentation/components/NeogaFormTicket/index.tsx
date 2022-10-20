import { StCircle, StNeogaFormTicket } from './style';

interface NeogaFormTicketProps {
  image: string;
  title: string;
  content: string;
  children: React.ReactNode;
  theme?: 'WHITE' | 'CORAL';
  isSmall?: boolean;
}

export default function NeogaFormTicket(props: NeogaFormTicketProps) {
  const { image, title, content, children, theme = 'WHITE', isSmall = false } = props;
  return (
    <StNeogaFormTicket theme={theme} isSmall={isSmall}>
      {image && <img src={image} />}
      <div>{content}</div>
      <div>{title}</div>
      <div>
        <StCircle isSmall={isSmall} />
        <hr />
        <StCircle isSmall={isSmall} />
      </div>
      {children}
    </StNeogaFormTicket>
  );
}
