import { IcBack } from "@assets/icons";
import { useNavigate } from "react-router-dom";
import { StTeamMember } from "./style";

function TeamMember() {
  const navigate = useNavigate();
  
  return <StTeamMember>
    <header>
      <IcBack onClick={() => navigate(-1)} />
      <div>팀원 목록</div>
      <button>완료</button>
    </header>
  </StTeamMember>;
}

export default TeamMember;
