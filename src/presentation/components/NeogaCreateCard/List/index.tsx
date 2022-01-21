import NeogaCreateCardItem from '../Item';
import { StNeogaCreateCardList } from './style';

interface CardItem {
  id: number;
  content: string;
  isNew: boolean;
  src: string;
  backgroundColor: string;
  title: string;
  isCreated: boolean;
}

interface NeogaCreateCardListProps {
  cards: CardItem[];
  onItemClick: (id: number, isCreated: boolean) => void;
}

function NeogaCreateCardList(props: NeogaCreateCardListProps) {
  const { cards, onItemClick } = props;
  return (
    <StNeogaCreateCardList>
      {cards.map((card) => (
        <NeogaCreateCardItem
          key={card.id}
          {...card}
          onClick={() => {
            onItemClick(card.id, card.isCreated);
          }}
        />
      ))}
    </StNeogaCreateCardList>
  );
}

export default NeogaCreateCardList;
