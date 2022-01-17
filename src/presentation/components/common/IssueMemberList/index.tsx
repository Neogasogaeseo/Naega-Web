import { TeamMember } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { StIssueMemberList } from './style';

interface IssueMemberListProps {
  teamID: string;
  issueNumber: number;
  issueMembers: TeamMember[];
}

function IssueMemberList(props: IssueMemberListProps) {
  const { issueMembers } = props;
  const length = issueMembers.length;
  const MAX_IMAGE_NUM = 3;

  return (
    <StIssueMemberList>
      <div>
        {issueMembers.slice(0, MAX_IMAGE_NUM).map(({ id, profileImage }) => (
          <img key={id} src={profileImage ?? imgEmptyProfile} />
        ))}
      </div>
      {length <= MAX_IMAGE_NUM ? null : <span>+{length - MAX_IMAGE_NUM}</span>}
    </StIssueMemberList>
  );
}

export default IssueMemberList;
