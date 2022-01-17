import { StInvitation } from './style';
import { icMessage } from '@assets/icons';
import { privateAPI } from '@infrastructure/remote/base';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@hooks/useToast';

interface TeamInvitationProps {
  id: number;
  name: string;
}

function TeamInvitation(props: TeamInvitationProps) {
  const { id, name } = props;
  const navigate = useNavigate();
  const { fireToast } = useToast();

  const onAcceptClick = async () => {
    const response = await privateAPI.put({ url: `/team/invite/accept`, data: { teamId: id } });
    if (response.status === 200) {
      fireToast({ content: '초대를 수락했습니다.' });
      setTimeout(() => {
        navigate(0);
      }, 1000);
    }
  };

  const onRejectClick = async () => {
    const response = await privateAPI.put({ url: `/team/invite/reject`, data: { teamId: id } });
    if (response.status === 200) {
      fireToast({ content: '초대를 거절했습니다.' });
      setTimeout(() => {
        navigate(0);
      }, 1000);
    }
  };

  return (
    <StInvitation key={id}>
      <div>
        <img src={icMessage} />
        <span>{name}팀</span>의 초대
      </div>
      <div>
        <button onClick={onAcceptClick}>수락</button>
        <button onClick={onRejectClick}>거절</button>
      </div>
    </StInvitation>
  );
}

export default TeamInvitation;
