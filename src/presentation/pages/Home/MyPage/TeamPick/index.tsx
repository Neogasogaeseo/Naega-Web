import CommonNavigation from '@components/common/Navigation';
import { StMyTeamPick } from './style';

function MyTeamPick() {
  return (
    <>
      <CommonNavigation title="팀원소개서 픽 하기" />
      <StMyTeamPick>
        <header>
          팀원소개서에 팀원이 남겨준 피드백들 중<br />
          <span>My 프로필에 걸어두고 싶은 피드백</span>을 <span>픽</span>해주세요!
        </header>
      </StMyTeamPick>
    </>
  );
}

export default MyTeamPick;
