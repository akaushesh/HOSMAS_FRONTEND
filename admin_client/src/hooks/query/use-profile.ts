import type { SupervisorProfileResponse } from '@/services/profile';
import { getProfile } from '@/services/profile';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

export const useProfile = (): UseQueryResult<AxiosResponse<SupervisorProfileResponse>> => {
  return useQuery({ queryFn: getProfile, queryKey: ['getProfile'] });
};
