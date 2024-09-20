import { getCleaningRequests, getSlots, type CleaningRequestParams, type SlotResponse } from '@/services/cleaning';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export const useCleaningRequests = (params: CleaningRequestParams): UseQueryResult<SlotResponse> => {
  return useQuery({ queryFn: () => getCleaningRequests(params), queryKey: ['getCleaningRequests'] });
};

export const useSlots = (): UseQueryResult => {
  return useQuery({ queryFn: getSlots, queryKey: ['getSlots'] });
};
