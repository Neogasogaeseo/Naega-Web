import CommonNavigation from '@components/common/Navigation';
import { StMyNeogaPick } from './style';

function MyNeogaPick() {
  return (
    <>
      <CommonNavigation title="너가소개서 픽 하기" />
      <StMyNeogaPick>
        <header>
          너가소개서에 지인이 남겨준 답변들 중<br />
          <span>My 프로필에 걸어두고 싶은 답변</span>을 <span>픽</span>해주세요!
        </header>
      </StMyNeogaPick>
    </>
  );
}

export default MyNeogaPick;
