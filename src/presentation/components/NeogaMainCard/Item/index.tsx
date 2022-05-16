import { StNeogaMainCardItem, StTitle } from './style';

interface NeogaMainCardItemProps {
  id: number;
  title: string;
  src: string;
  backgroundColor: string;
  onItemClick: (id: number) => void;
}

function NeogaMainCardItem(props: NeogaMainCardItemProps) {
  const { id, title, src, backgroundColor, onItemClick } = props;
  const [firstLine, secondLine] = title.split('\\n');
  const isFirstLineBold = firstLine.includes('*');
  const isSecondLineBold = secondLine.includes('*');

  return (
    <StNeogaMainCardItem color={backgroundColor} onClick={() => onItemClick(id)}>
      <img src={src} />
      <StTitle isBold={isFirstLineBold}>{firstLine.replaceAll('*', '')}</StTitle>
      <StTitle isBold={isSecondLineBold}>{secondLine.replaceAll('*', '')}</StTitle>
    </StNeogaMainCardItem>
  );
}

export default NeogaMainCardItem;
