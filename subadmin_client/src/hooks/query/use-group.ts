import { getGroup } from '@/services/group';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';

export const useGroup = (): UseQueryResult => {
  return useQuery({ queryFn: getGroup, queryKey: ['getGroup'] });
};
