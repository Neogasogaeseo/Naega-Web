import MyItem from '@components/common/MyItem';
import { StItemWrapper, StProfileList } from '@components/common/ProfileList/style';

interface MyListData {
  id: number;
  profileImage?: string;
}

interface MyListProps {
  isSquare: boolean;
  items: MyListData[];
  selectedItem: MyListData | null;
  setSelectedItem: (myListData: MyListData) => void;
}

function MyListSelectable(props: MyListProps) {
  const { isSquare, items, selectedItem, setSelectedItem } = props;

  return (
    <StProfileList>
      <StItemWrapper isSquare={isSquare}>
        {items.map(({ id, profileImage }) => (
          <MyItem
            key={id}
            id={id}
            profileImage={profileImage}
            isSquare={isSquare}
            isSelected={selectedItem?.id === id}
            onProfileClick={() => setSelectedItem({ id, profileImage })}
          />
        ))}
      </StItemWrapper>
    </StProfileList>
  );
}

export default MyListSelectable;
