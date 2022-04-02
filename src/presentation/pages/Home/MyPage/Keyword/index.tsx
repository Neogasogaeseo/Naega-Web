import { useState } from 'react';
import { useParams } from 'react-router-dom';

import CommonNavigation from '@components/common/Navigation';
import MyPageEditBottomSheet from '@components/common/BottomSheet/MyPageEdit';
import { StMyKeyword, StMyKeywordHeader } from './style';
import { IcMeatball } from '@assets/icons';

function MyKeyword() {
  const { userID } = useParams();
  const [isBottomSheetOpened, setIsBottomSheetOpened] = useState(false);

  if (!userID) return <></>;

  return (
    <>
      <CommonNavigation title="My 키워드" />
      <StMyKeyword>
        <StMyKeywordHeader>
          <span>My 키워드</span>
          <IcMeatball onClick={() => setIsBottomSheetOpened(true)} />
        </StMyKeywordHeader>
        <MyPageEditBottomSheet
          isOpened={isBottomSheetOpened}
          closeBottomSheet={() => setIsBottomSheetOpened(false)}
          type="keyword"
          userID={userID}
        />
      </StMyKeyword>
    </>
  );
}

export default MyKeyword;
