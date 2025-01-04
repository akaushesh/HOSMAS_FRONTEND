import type { AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { cleaningApi } from './api';

export interface Attendance {
  is_present: boolean;
  levels: number[];
}

export interface Worker {
  id: number;
  name: string;
  phone: string;
  photo: string | null;
  is_active: boolean;
  attendance: Attendance | null;
}

export type WorkersResponse = Worker[];

export const getWorkersOfHostel = async (hostelId: number): Promise<AxiosResponse<WorkersResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await cleaningApi.get(`hostels/${String(hostelId)}/workers/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getWorkersOfHostel', res.data);

  return res;
};

export const markWorkerAttendance = async (workers: { id: number; is_present: boolean }[]): Promise<AxiosResponse> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await cleaningApi.post(
    'workers/mark-attendance/',
    { workers },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  logger.debug('markWorkerAttendance', res.data);

  return res;
};

export const assignFloorToWorkers = async () => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await cleaningApi.get('assign-floors-to-workers/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('assignFloorToWorkers', res.data);

  return res;
};

export const assignRequestsToWorkers = async () => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await cleaningApi.get('assign-requests-to-workers/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('assignRequests', res.data);

  return res;
};
