import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '@api/index';
import { StInvitation } from './style';
import { icMessage } from '@assets/icons';

interface TeamInvitationProps {
  id: number;
  name: string;
}

function TeamInvitation(props: TeamInvitationProps) {
  const { id, name } = props;
  const navigate = useNavigate();
  const [isAccepted, setIsAccepted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const onAcceptClick = async () => {
    const response = await api.teamService.acceptInvitation(id);
    if (response.isSuccess) {
      setIsAccepted(true);
      setTimeout(() => {
        navigate(0);
      }, 1000);
    }
  };

  const onRejectClick = async () => {
    const response = await api.teamService.rejectInvitation(id);
    if (response.isSuccess) {
      setIsRejected(true);
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
      {isAccepted ? (
        <span>수락 완료</span>
      ) : isRejected ? (
        <span>거절 완료</span>
      ) : (
        <div>
          <button onClick={onAcceptClick}>수락</button>
          <button onClick={onRejectClick}>거절</button>
        </div>
      )}
    </StInvitation>
  );
}

export default TeamInvitation;
