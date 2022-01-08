import { useNavigate } from 'react-router-dom';
import { StAddTeamButton, StAddMemberButton } from './style';
import { icPlus } from '@assets/icons/index';

interface ProfileAddButtonProps {
  type: string;
}

function ProfileAddButton(props: ProfileAddButtonProps) {
  const { type } = props;

  // type 값이 'team'이면 팀 등록 페이지로 이동
  // 그렇지 않으면 팀원 추가 페이지로 이동
  const navigate = useNavigate();
  const handleClick = () => {
    type === 'team' ? navigate('/register') : navigate('/register/members');
  };

  return (
    <>
      {type === 'team' ? (
        <StAddTeamButton onClick={handleClick}>
          <img src={icPlus} />
        </StAddTeamButton>
      ) : (
        <StAddMemberButton onClick={handleClick}>
          <img src={icPlus} />
        </StAddMemberButton>
      )}
    </>
  );
}

export default ProfileAddButton;
