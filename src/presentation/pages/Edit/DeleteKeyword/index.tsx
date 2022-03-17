import { useParams } from 'react-router-dom';

import CommonNavigation from '@components/common/CommonNavigation';
import { StMyKeywordDelete, StMyKeywordHeader } from './style';

function MyKeywordDelete() {
  const { userID } = useParams();

  if (!userID) return <></>;

  return (
    <>
      <CommonNavigation title="My 키워드" />
      <StMyKeywordDelete>
        <StMyKeywordHeader>
          <span>My 키워드</span>
        </StMyKeywordHeader>
      </StMyKeywordDelete>
    </>
  );
}

export default MyKeywordDelete;
