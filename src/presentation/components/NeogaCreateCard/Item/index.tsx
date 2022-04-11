import { IcArrowRight } from '@assets/icons';
import { StNeogaCreateCardItem } from './style';

interface NeogaCreateCardItemProps {
  title: string;
  content: string;
  src: string;
  backgroundColor: string;
  onClick: () => void;
}

function NeogaCreateCardItem(props: NeogaCreateCardItemProps) {
  const { title, content, src, backgroundColor, onClick } = props;
  return (
    <StNeogaCreateCardItem color={backgroundColor} onClick={onClick}>
      <img src={src} alt={content} />
      <div>
        <div>{title.replaceAll('\n', ' ').replaceAll('*', '')}</div>
        <div>{content}</div>
      </div>
      <IcArrowRight />
    </StNeogaCreateCardItem>
  );
}

export default NeogaCreateCardItem;
