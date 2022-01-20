import NeogaMainCardItem from '../Item';
import { StNeogaMainCardList, StCardWrapper } from './style';

interface MainCardItem {
  id: number;
  title: string;
  src: string;
  backgroundColor: string;
}

interface NeogaMainCardListProps {
  cards: MainCardItem[];
  onItemClick: (id: number) => void;
}

function NeogaMainCardList(props: NeogaMainCardListProps) {
  const { cards, onItemClick } = props;
  return (
    <StNeogaMainCardList>
      <StCardWrapper>
        {cards.map((card) => (
          <NeogaMainCardItem key={card.id} {...card} onItemClick={() => onItemClick(card.id)} />
        ))}
      </StCardWrapper>
    </StNeogaMainCardList>
  );
}

export default NeogaMainCardList;
