import { StIssueMemberList } from './style';

interface IssueMemberListProps {
  teamID: string;
  issueNumber: number;
  issueMembers: string[];
}

function IssueMemberList(props: IssueMemberListProps) {
  const { teamID, issueNumber, issueMembers } = props;
  const length = issueMembers.length;
  const MAX_IMAGE_NUM = 3;

  return (
    <StIssueMemberList>
      <div>
        {issueMembers.slice(0, MAX_IMAGE_NUM).map((member, index) => (
          <img key={`Team ${teamID}-Issue ${issueNumber}-Index ${index}`} src={member} />
        ))}
      </div>
      {length <= MAX_IMAGE_NUM ? null : <span>+{length - MAX_IMAGE_NUM}</span>}
    </StIssueMemberList>
  );
}

export default IssueMemberList;