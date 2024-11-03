import { getLeaves, type GetLeavesRequest, type GetLeavesResponse } from '@/services/leave';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

export const useLeaves = (params: GetLeavesRequest): UseQueryResult<AxiosResponse<GetLeavesResponse>> => {
  return useQuery({ queryFn: () => getLeaves(params), queryKey: ['getLeaves'] });
};
