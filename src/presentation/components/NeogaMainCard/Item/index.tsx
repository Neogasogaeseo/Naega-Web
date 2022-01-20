import { StNeogaMainCardItem } from './style';

interface NeogaMainCardItemProps {
  id: number;
  title: string;
  src: string;
  backgroundColor: string;
  onItemClick: (id: number) => void;
}

function NeogaMainCardItem(props: NeogaMainCardItemProps) {
  const { id, title, src, backgroundColor, onItemClick } = props;

  return (
    <StNeogaMainCardItem color={backgroundColor} onClick={() => onItemClick(id)}>
      <img src={src} />
      <div>{title}</div>
    </StNeogaMainCardItem>
  );
}

export default NeogaMainCardItem;
