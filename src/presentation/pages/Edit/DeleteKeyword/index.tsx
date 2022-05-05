import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import CommonNavigation from '@components/common/Navigation';
import CommonModal from '@components/common/Modal';
import { StRelativeWrapper, StMyKeywordDelete, StMyKeywordHeader } from './style';

function MyKeywordDelete() {
  const navigate = useNavigate();
  const { userID } = useParams();
  const [isOpenModal, setIsOpenModal] = useState(false);

  if (!userID) return <></>;

  return (
    <StRelativeWrapper>
      <CommonModal
        isOpened={isOpenModal}
        title="키워드를 삭제하시겠습니까?"
        description={'키워드를 삭제하면 전체 게시글에서' + '\n' + '해당 키워드가 모두 삭제됩니다.'}
        onClickConfirm={() => setIsOpenModal(false)}
        onClickCancel={() => setIsOpenModal(false)}
      />
      <CommonNavigation
        title="My 키워드"
        submitButton={{ content: '완료', onClick: () => navigate(`/home/mypage/${userID}`) }}
      />
      <StMyKeywordDelete>
        <StMyKeywordHeader>
          <div>
            <span>My 키워드</span>
            <span>24</span>
          </div>
        </StMyKeywordHeader>
        <button onClick={() => setIsOpenModal(true)}>삭제</button>
      </StMyKeywordDelete>
    </StRelativeWrapper>
  );
}

export default MyKeywordDelete;
