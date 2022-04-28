import { useParams, useNavigate } from 'react-router-dom';

import CommonNavigation from '@components/common/Navigation';
import { StMyKeywordDelete, StMyKeywordHeader } from './style';

function MyKeywordDelete() {
  const navigate = useNavigate();
  const { userID } = useParams();

  if (!userID) return <></>;

  return (
    <>
      <CommonNavigation
        title="My 키워드"
        submitButton={{ content: '완료', onClick: () => navigate(`/home/mypage/${userID}`) }}
      />
      <StMyKeywordDelete>
        <StMyKeywordHeader>
          <span>My 키워드</span>
        </StMyKeywordHeader>
      </StMyKeywordDelete>
    </>
  );
}

export default MyKeywordDelete;
