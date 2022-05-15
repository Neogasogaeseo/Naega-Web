import { useState } from 'react';

import MyItem from '@components/MyItem';
import { StProfileList, StItemWrapper, StAllButton } from '@components/common/ProfileList/style';

interface MyListData {
  id: number;
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
      <StItemWrapper isSquare={isSquare}>
        <StAllButton
          isSquare={isSquare}
          isSelected={allButton}
          onClick={() => {
            setAllButton(true);
            setSelectedItem(null);
          }}
        >
          ALL
        </StAllButton>
        {items.map(({ id, profileImage }) => (
          <MyItem
            key={id}
            id={id}
            profileImage={profileImage}
            isSquare={isSquare}
            isSelected={selectedItem?.id === id}
            onProfileClick={() => {
              setAllButton(false);
              setSelectedItem({ id, profileImage });
            }}
          />
        ))}
      </StItemWrapper>
    </StProfileList>
  );
}

export default MySelectableList;
