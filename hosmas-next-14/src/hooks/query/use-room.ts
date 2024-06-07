import { getRooms } from '@/services/room';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';

export const useRooms = (): UseQueryResult => {
  return useQuery({ queryFn: getRooms, queryKey: ['getRooms'] });
};
