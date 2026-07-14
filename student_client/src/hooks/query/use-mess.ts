import { getMenuItems, getMessMenu, getPreviousFeedbacks, type PreviousFeedbackResponse, type MenuItem, type MessMenu } from '@/services/mess';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

export const useMessMenu = ({ hostelId }: { hostelId: number }): UseQueryResult<AxiosResponse<MessMenu>> => {
  return useQuery({
    queryFn: () => getMessMenu(hostelId),
    queryKey: ['messMenu', hostelId],
  });
};

export const useGetFeedback = (): UseQueryResult<AxiosResponse<PreviousFeedbackResponse>> => {
  return useQuery({
    queryFn: getPreviousFeedbacks,
    queryKey: ['previousFeebacks'],
  });
};

export const useMenuItems = (): UseQueryResult<AxiosResponse<MenuItem[]>> => {
  return useQuery({
    queryFn: getMenuItems,
    queryKey: ['menuItems'],
  });
};
