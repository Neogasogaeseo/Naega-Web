import { StInvitation } from './style';
import { icMessage } from '@assets/icons';

interface TeamInvitationProps {
  id: number;
  name: string;
}

function TeamInvitation(props: TeamInvitationProps) {
  const { id, name } = props;
  return (
    <StInvitation key={id}>
      <div>
        <img src={icMessage} />
        <span>{name}팀</span>의 초대
      </div>
      <div>
        <button>수락</button>
        <button>거절</button>
      </div>
    </StInvitation>
  );
}

export default TeamInvitation;
