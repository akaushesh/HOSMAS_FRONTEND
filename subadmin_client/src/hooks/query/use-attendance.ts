import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

import {
  listSessions,
  getSessionResults,
} from '@/services/attendance';
import {
  type ListSessionsResponse,
  type SessionResultsResponse,
} from '@/types/attendance';

export const useListSessions = (): UseQueryResult<AxiosResponse<ListSessionsResponse>> => {
  return useQuery({
    queryFn: () => listSessions(),
    queryKey: ['listSessions'],
  });
};

export const useSessionResults = (sessionId: number): UseQueryResult<AxiosResponse<SessionResultsResponse>> => {
  return useQuery({
    queryFn: () => getSessionResults(sessionId),
    queryKey: ['getSessionResults', sessionId],
    enabled: typeof sessionId === 'number' && !isNaN(sessionId) && sessionId > 0,
  });
};
