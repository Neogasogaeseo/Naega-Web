import { useState } from 'react';
import { useParams } from 'react-router-dom';

import CommonNavigation from '@components/common/Navigation';
import MyPageEditBottomSheet from '@components/common/BottomSheet/ProfileEdit';
import { StMyKeywordEdit, StMyKeywordHeader } from './style';
import { IcMeatball } from '@assets/icons';

function MyKeywordEdit() {
  const { userID } = useParams();
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);

  if (!userID) return <></>;

  const openBottomSheet = () => {
    setIsBottomSheetOpened(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetOpened(false);
  };

  return (
    <>
      <CommonNavigation title="My 키워드" />
      <StMyKeywordEdit>
        <StMyKeywordHeader>
          <span>My 키워드</span>
          <IcMeatball onClick={() => openBottomSheet()} />
        </StMyKeywordHeader>
        <MyPageEditBottomSheet
          isOpened={isBottomSheetOpened}
          closeBottomSheet={closeBottomSheet}
          type="keyword"
          userID={userID}
        />
      </StMyKeywordEdit>
    </>
  );
}

export default MyKeywordEdit;
