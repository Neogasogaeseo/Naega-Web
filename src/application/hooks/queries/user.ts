import { api } from '@api/index';

import { useMutation, UseMutationOptions } from 'react-query';

export const usePickNeososeoAnswer = (answerID: number, options?: UseMutationOptions) =>
  useMutation(async () => {
    const response = await api.neogaService.postAnswerBookmark(answerID);
    return response;
  }, options);
