import { getProfile, getProfile2 } from '@/services/profile';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';

export const useProfile = (): UseQueryResult => {
  return useQuery({ queryFn: getProfile, queryKey: ['getProfile'] });
};

export const useProfile2 = (): UseQueryResult => {
  return useQuery({ queryFn: getProfile2, queryKey: ['getProfile2'] });
};
