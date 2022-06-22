import { useState } from 'react';
import { StSelectBoxHeader, StSelectBoxWrapper, StSelectBoxItem, StSelectBoxTail } from './style';
import { IcArrowDown, IcArrowUp } from '@assets/icons';

type SelectItem = {
  id: number;
  content: string;
};

type SelectBoxProps = {
  items: SelectItem[];
  selectedItemID: SelectItem['id'];
  onItemClick: (itemID: SelectItem['id']) => void;
};

function SelectBox(props: SelectBoxProps) {
  const { items, selectedItemID, onItemClick } = props;
  const [isBoxOpened, setIsBoxOpened] = useState(false);

  return (
    <StSelectBoxWrapper
      onClick={(e) => {
        e.stopPropagation();
        setIsBoxOpened((prev) => !prev);
      }}
    >
      <StSelectBoxHeader>
        <div>{items.find((item) => item.id === selectedItemID)?.content}</div>
        {isBoxOpened ? <IcArrowUp /> : <IcArrowDown />}
      </StSelectBoxHeader>
      {isBoxOpened && (
        <StSelectBoxTail>
          {items.map((item) => (
            <StSelectBoxItem
              key={item.id}
              selected={item.id === selectedItemID}
              onClick={(e) => {
                e.stopPropagation();
                onItemClick(item.id);
                setIsBoxOpened(false);
              }}
            >
              {item.content}
            </StSelectBoxItem>
          ))}
        </StSelectBoxTail>
      )}
    </StSelectBoxWrapper>
  );
}

export default SelectBox;
