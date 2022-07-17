import { QueryClient, useMutation, UseMutationOptions } from 'react-query';

import { api } from '@api/index';
import { TeamProfileData } from '@api/types/team';

const queryClient = new QueryClient();

export const useDeleteTeam = (teamID: number) =>
  useMutation(async (teamID: number) => await api.teamService.deleteTeam(teamID), {
    onSuccess: () => {
      queryClient.setQueryData('teamProfileData', (old: TeamProfileData | undefined) => {
        return { profileList: old ? old.profileList.filter((o) => o.id !== teamID) : [] };
      });
    },
  });

export const usePickTeamFeedback = (feedbackID: number, options?: UseMutationOptions) =>
  useMutation(async () => await api.teamService.postFeedbackBookmark(feedbackID), options);
