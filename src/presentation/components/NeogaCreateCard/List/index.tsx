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
      {cards.map((card, idx) => (
        <NeogaCreateCardItem
          key={card.id}
          {...card}
          onClick={() => {
            console.log('NeogaCreateCardList', card.isCreated);
            onItemClick(card.id, card.isCreated);
          }}
          idx={idx}
        />
      ))}
    </StNeogaCreateCardList>
  );
}

export default NeogaCreateCardList;
