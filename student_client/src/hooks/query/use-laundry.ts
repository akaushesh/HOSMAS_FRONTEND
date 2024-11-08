import { getLaundrySlips,type LaundryInitResponse } from '@/services/laundry';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

export const useLaundryData = (): UseQueryResult<AxiosResponse<LaundryInitResponse>> => {
  return useQuery({ queryFn: getLaundrySlips, queryKey: ['getLaundrySlips'] });
};
