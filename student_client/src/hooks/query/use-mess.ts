import { getMenuItems, getMessMenu, type MenuItem, type MessMenu } from '@/services/mess';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

interface UseMessMenuParams {
  hostelId: number;
  enabled?: boolean;
}

export const useMessMenu = ({
  hostelId,
  enabled = true,
}: UseMessMenuParams): UseQueryResult<AxiosResponse<MessMenu>> => {
  return useQuery({
    queryFn: () => getMessMenu(hostelId),
    queryKey: ['messMenu', hostelId],
    enabled: enabled && [5, 6].includes(hostelId),
    staleTime: 5 * 60 * 1000, // Data considered fresh for 5 minutes
    gcTime: 30 * 60 * 1000, // Cache data for 30 minutes
  });
};

export const useMenuItems = (enabled: boolean = true): UseQueryResult<AxiosResponse<MenuItem[]>> => {
  return useQuery({
    queryFn: getMenuItems,
    queryKey: ['menuItems'],
    enabled,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};
