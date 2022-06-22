import { api } from '@api/index';
import { TeamProfileData } from '@api/types/team';
import { QueryClient, useMutation } from 'react-query';

const queryClient = new QueryClient();

export const useDeleteTeam = (teamID: number) =>
  useMutation(async (teamID: number) => await api.teamService.deleteTeam(teamID), {
    onSuccess: () => {
      queryClient.setQueryData('teamProfileData', (old: TeamProfileData | undefined) => {
        return { profileList: old ? old.profileList.filter((o) => o.id !== teamID) : [] };
      });
    },
  });
