import {
  getCleaningRequests,
  getSlots,
  type CleaningRequestParams,
  type CleaningRequestsResponse,
  type SlotResponse,
} from '@/services/cleaning';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

export const useCleaningRequests = (
  params: CleaningRequestParams
): UseQueryResult<AxiosResponse<CleaningRequestsResponse>> => {
  return useQuery({ queryFn: () => getCleaningRequests(params), queryKey: ['getCleaningRequests'] });
};

export const useSlots = (): UseQueryResult<AxiosResponse<SlotResponse>> => {
  return useQuery({ queryFn: getSlots, queryKey: ['getSlots'] });
};
