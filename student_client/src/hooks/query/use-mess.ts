import { getMenuItems, getMessMenu, getPreviousFeedbacks, type PreviousFeedbackResponse, type MenuItem, type MessMenu } from '@/services/mess';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

interface UseMessMenuParams {
  hostelId: number;
  enabled?: boolean;
}

export const useMessMenu = ({
  hostelId,
}: UseMessMenuParams): UseQueryResult<AxiosResponse<MessMenu>> => {
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
