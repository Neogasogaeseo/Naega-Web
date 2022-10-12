import { StCircle, StNeogaFormTicket } from './style';

interface NeogaFormTicketProps {
  image: string;
  title: string;
  content: string;
  children: React.ReactNode;
  theme?: 'WHITE' | 'CORAL';
}

export default function NeogaFormTicket(props: NeogaFormTicketProps) {
  const { image, title, content, children, theme = 'WHITE' } = props;
  return (
    <StNeogaFormTicket theme={theme}>
      {image && <img src={image} />}
      <div>{content}</div>
      <div>{title}</div>
      <div>
        <StCircle />
        <hr />
        <StCircle />
      </div>
      {children}
    </StNeogaFormTicket>
  );
}
