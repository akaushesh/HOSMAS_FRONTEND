import { getGroup, getMyToken } from '@/services/group';
import type { GroupResponse } from '@/services/group';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

export const useGroup = (): UseQueryResult<AxiosResponse<GroupResponse>> => {
  return useQuery({ queryFn: getGroup, queryKey: ['getGroup'] });
};

export const useMyToken = (): UseQueryResult => {
  return useQuery({ queryFn: getMyToken, queryKey: ['getMyToken'] });
};
