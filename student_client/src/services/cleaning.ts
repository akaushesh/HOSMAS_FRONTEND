import type { AxiosResponse } from 'axios';

// import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { cleaningApi } from './api';

interface CleaningRequestsResponse {
  count: number;
  next: string;
  previous: string;
  results: CleaningRequest[];
}

interface CleaningRequest {
  id: number;
  room: string;
  level: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface CleaningRequestParams {
  room: number;
  page: number;
  page_size: number;
}

export interface CleaningRequestCompleteData {
  request_id: number;
  rating: number;
  comments: string;
}

export interface CreateCleaningRequestParams {
  preferred_slots: number[];
  preferred_dates: string[];
}

export interface CleaningRequestCompleteResponse {
  status: string;
}

export interface CreateCleaningRequestResponse {
  status: string;
}

export type SlotResponse = Slot[];

interface Slot {
  id: number;
  hostel_id: number;
  start: string;
  end: string;
  is_enabled: boolean;
}

export const getCleaningRequests = async (
  params: CleaningRequestParams
): Promise<AxiosResponse<CleaningRequestsResponse>> => {
  // const token = (await authClient.getToken()).data;
  const token = localStorage.getItem('new-custom-auth-token');

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await cleaningApi.get(
    `getCleaningRequests/?page_size=${String(params.page_size)}&page=${String(params.page)}&room_number=${String(params.room)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  logger.debug('getCleaningRequests', res.data);

  return res;
};

export const getSlots = async (): Promise<AxiosResponse<SlotResponse>> => {
  // const token = (await authClient.getToken()).data;
  const token = localStorage.getItem('new-custom-auth-token');

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await cleaningApi.get('getSlots/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getSlots', res.data);

  return res;
};

export const markCleaningRequestComplete = async (
  params: CleaningRequestCompleteData
): Promise<AxiosResponse<CleaningRequestCompleteResponse>> => {
  // const token = (await authClient.getToken()).data;
  const token = localStorage.getItem('new-custom-auth-token');

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const data: CleaningRequestCompleteData = params;

  const res = await cleaningApi.post('mark-request-complete/', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('markCleaningRequestComplete', res.data);

  return res;
};

export const createCleaningRequest = async (
  params: CreateCleaningRequestParams
): Promise<AxiosResponse<CreateCleaningRequestResponse>> => {
  // const token = (await authClient.getToken()).data;
  const token = localStorage.getItem('new-custom-auth-token');

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const data = params;

  const res = await cleaningApi.post('createCleaningRequests/', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
