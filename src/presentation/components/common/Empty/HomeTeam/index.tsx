import { StHomeTeamEmptyView } from './style';
import { imgEmptyMain } from '@assets/images';

function HomeTeamEmptyView() {
  return (
    <StHomeTeamEmptyView>
      <img src={imgEmptyMain} />
      <div>아직 팀원소개서 컨텐츠가 없어요</div>
      <div>팀이나 이슈를 추가해보세요</div>
    </StHomeTeamEmptyView>
  );
}

export default HomeTeamEmptyView;
