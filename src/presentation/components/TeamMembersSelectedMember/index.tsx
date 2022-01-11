import { IcDelete } from '@assets/icons';
import { StTeamMembersSelectedMember, StName } from './style';

export default function TeamMembersSelectedMember({ name }: { name: string }) {
  return (
    <StTeamMembersSelectedMember>
      <StName>{name}</StName>
      <IcDelete />
    </StTeamMembersSelectedMember>
  );
}
