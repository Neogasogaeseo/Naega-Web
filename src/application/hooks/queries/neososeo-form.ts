import { useQuery } from 'react-query';

import { api } from '@api/index';

export const useGetFormInfo = (q: string) =>
  useQuery(['neososeoForm', q], () => api.neososeoFormService.getFormInfo(q));
