import { getLeaves, type GetLeavesResponse } from '@/services/leave';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

export const useLeaves = (): UseQueryResult<AxiosResponse<GetLeavesResponse>> => {
  return useQuery({ queryFn: () => getLeaves(), queryKey: ['getLeaves'] });
};
