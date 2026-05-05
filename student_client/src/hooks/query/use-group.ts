import { getGroup, getMyToken } from '@/services/group';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';

export const useGroup = (): UseQueryResult => {
  return useQuery({ queryFn: getGroup, queryKey: ['getGroup'] });
};

export const useMyToken = (): UseQueryResult => {
  return useQuery({ queryFn: getMyToken, queryKey: ['getMyToken'] });
};
