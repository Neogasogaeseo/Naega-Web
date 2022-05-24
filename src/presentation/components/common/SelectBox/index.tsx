import { IcArrowDown, IcArrowUp } from '@assets/icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { StSelectBoxHeader, StSelectBoxWrapper, StSelectBoxItem, StSelectBoxTail } from './style';

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

  const closeSelectBox = () => {
    setIsBoxOpened(false);
  };

  const openSelectBox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBoxOpened(true);
  };

  useEffect(() => {
    window.addEventListener('click', closeSelectBox);
    return () => window.removeEventListener('click', closeSelectBox);
  }, []);

  return (
    <StSelectBoxWrapper>
      <StSelectBoxHeader>
        <div>{items.find((item) => item.id === selectedItemID)?.content}</div>
        {isBoxOpened ? (
          <IcArrowUp onClick={closeSelectBox} />
        ) : (
          <IcArrowDown onClick={openSelectBox} />
        )}
      </StSelectBoxHeader>
      {isBoxOpened && (
        <StSelectBoxTail>
          {items.map((item) => (
            <StSelectBoxItem
              key={item.id}
              selected={item.id === selectedItemID}
              onClick={() => onItemClick(item.id)}
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
