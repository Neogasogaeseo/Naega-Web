import React from 'react';
import NeogaCreateCardItem from '../Item';
import { StNeogaCreateCardList } from './style';

interface CardItem {
  id: number;
  content: string;
  isNew: boolean;
  src: string;
  backgroundColor: string;
}

interface NeogaCreateCardListProps {
  cards: CardItem[];
  onItemClick: (id: number) => void;
}

function NeogaCreateCardList(props: NeogaCreateCardListProps) {
  const { cards, onItemClick } = props;
  return (
    <StNeogaCreateCardList>
      {cards.map((card) => (
        <NeogaCreateCardItem key={card.content} {...card} onClick={() => onItemClick(card.id)} />
      ))}
    </StNeogaCreateCardList>
  );
}

export default NeogaCreateCardList;
