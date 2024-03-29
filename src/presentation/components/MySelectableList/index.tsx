import { useState } from 'react';

import MyItem from '@components/MyItem';
import { StProfileList, StItemWrapper, StAllButtonWrapper, StAllButton } from './style';

interface MyListData {
  id: number;
  title?: string;
  profileImage?: string;
}

interface MyListProps {
  isSquare: boolean;
  items: MyListData[];
  selectedItem: MyListData | null;
  setSelectedItem: (myListData: MyListData | null) => void;
}

function MySelectableList(props: MyListProps) {
  const { isSquare, items, selectedItem, setSelectedItem } = props;
  const [allButton, setAllButton] = useState(true);

  return (
    <StProfileList>
      <StItemWrapper>
        <StAllButtonWrapper
          isSelected={allButton}
          onClick={() => {
            setAllButton(true);
            setSelectedItem(null);
          }}
        >
          <StAllButton isSquare={isSquare} isSelected={allButton}>
            ALL
          </StAllButton>
          {isSquare && <span>전체</span>}
        </StAllButtonWrapper>
        {items.map(({ id, title, profileImage }) => (
          <MyItem
            key={id}
            id={id}
            title={title}
            profileImage={profileImage}
            isSquare={isSquare}
            isSelected={selectedItem?.id === id}
            onProfileClick={() => {
              setAllButton(false);
              setSelectedItem({ id, title, profileImage });
            }}
          />
        ))}
      </StItemWrapper>
    </StProfileList>
  );
}

export default MySelectableList;
