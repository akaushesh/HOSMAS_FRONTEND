import type { RoomListItem } from '@/services/room';
import { getAvailableRooms } from '@/services/room';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

export const useAvailableRooms = (): UseQueryResult<AxiosResponse<RoomListItem[]>> => {
  return useQuery({ queryFn: getAvailableRooms, queryKey: ['getAvailableRooms'] });
};
