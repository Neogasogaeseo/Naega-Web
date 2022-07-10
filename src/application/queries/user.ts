import { api } from '@api/index';

import { useMutation, UseMutationOptions } from 'react-query';

export const usePickNeososeoAnswer = (id: number, options?: UseMutationOptions) =>
  useMutation(async () => {
    const response = await api.neogaService.postAnswerBookmark(id);
    return response;
  }, options);
