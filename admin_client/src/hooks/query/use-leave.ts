import { type FetchRecordsParams, type FetchRecordsResponse, getRecords, getTotalLeaves, searchRecords, type SearchRecordsParams, type TotLeavesResponse } from '@/services/leave';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

export const useTotalLeaves = (): UseQueryResult<AxiosResponse<TotLeavesResponse>> => {
  return useQuery({ queryFn: () => getTotalLeaves(), queryKey: ['getTotalLeaves'] });
};

export const useGetRecords = (params:FetchRecordsParams): UseQueryResult<AxiosResponse<FetchRecordsResponse>> => {
  return useQuery({ queryFn: () => getRecords(params), queryKey: ['getRecords'] });
};

export const useSearchRecords = (params:SearchRecordsParams,showSearch:boolean): UseQueryResult<AxiosResponse<FetchRecordsResponse>> => {
  return useQuery({ queryFn: () => searchRecords(params), queryKey: ['searchRecords'] ,enabled: showSearch});
};

