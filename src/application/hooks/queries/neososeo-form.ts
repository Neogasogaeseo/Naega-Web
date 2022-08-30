import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

import { api } from '@api/index';
import { NeososeoFormData } from '@api/types/neososeo-form';

export const useGetFormInfo = (
  q: string,
  options?: Omit<
    UseQueryOptions<NeososeoFormData, AxiosError, Promise<NeososeoFormData>, string[]>,
    'queryKey' | 'queryFn'
  >,
) =>
  useQuery(['neososeoForm', q], () => api.neososeoFormService.getFormInfo(q), {
    ...options,
    useErrorBoundary: options?.useErrorBoundary ?? true,
  });
