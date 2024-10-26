import { getLaundrySlips, type LaundrySlipResponse } from '@/services/laundry';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

export const useLaundrySlips = (): UseQueryResult<AxiosResponse<LaundrySlipResponse>> => {
  return useQuery({ queryFn: getLaundrySlips, queryKey: ['getLaundrySlips'] });
};
