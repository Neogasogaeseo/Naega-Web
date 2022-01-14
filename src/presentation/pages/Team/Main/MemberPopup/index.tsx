import { StTeamMemberPopup } from './style';

function TeamMemberPopup() {
  return (
    <StTeamMemberPopup>
      {/* member 배열 map */}
      <div>
        <img src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg" />
        <span>캐서린</span>
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg" />
        <span>웬디</span>
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg" />
        <span>콩콩이</span>
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg" />
        <span>크왕</span>
      </div>
    </StTeamMemberPopup>
  );
}

export default TeamMemberPopup;
