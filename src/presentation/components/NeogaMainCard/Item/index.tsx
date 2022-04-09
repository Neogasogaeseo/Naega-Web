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
  const twoLineTitle = title.split('\n');
  const firstLine = twoLineTitle[0];
  const secondLine = twoLineTitle[1];
  const isFirstLineSpecial = firstLine.includes('*');
  const isSecondLineSpecial = secondLine.includes('*');

  return (
    <StNeogaMainCardItem color={backgroundColor} onClick={() => onItemClick(id)}>
      <img src={src} />
      <StTitle isBold={isFirstLineSpecial}>{firstLine.replaceAll('*', '')}</StTitle>
      <StTitle isBold={isSecondLineSpecial}>{secondLine.replaceAll('*', '')}</StTitle>
    </StNeogaMainCardItem>
  );
}

export default NeogaMainCardItem;
