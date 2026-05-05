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

export interface CleaningRequest {
  id: number;
  student_id: number;
  room_number: string;
  room_id: number;
  status: string;
  worker_id?: number;
  worker?: Worker;
  preferred_slots: number[];
  preferred_dates: string[];
}

export const getCleaningRequests = async (): Promise<AxiosResponse<{ results: CleaningRequest[] }>> => {
  const token = (await authClient.getToken()).data;
  if (!token) throw new Error('Not logged in');
  const res = await cleaningApi.get('getCleaningRequests/', { headers: { Authorization: `Bearer ${token}` } });
  logger.debug('getCleaningRequests raw response:', res.data);
  return res;
};

export const getSlots = async (): Promise<AxiosResponse> => {
  const token = (await authClient.getToken()).data;
  if (!token) throw new Error('Not logged in');
  return cleaningApi.get('getSlots/', { headers: { Authorization: `Bearer ${token}` } });
};

export const assignSingleRequest = async (requestId: string, workerId: string, slotId?: number) => {
  const token = (await authClient.getToken()).data;
  if (!token) throw new Error('Not logged in');
  return cleaningApi.post(`assign-request/${requestId}/`, { worker_id: parseInt(workerId), slot_id: slotId }, { headers: { Authorization: `Bearer ${token}` } });
};

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

export const createWorker = async (workerData: { name: string; phone: string; photo: string }) => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await cleaningApi.post('createWorker/', workerData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('createWorker', res.data);

  return res;
};

export const createSlot = async (slotData: { start: string; end: string; is_enabled: boolean }) => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await cleaningApi.post('createSlot/', slotData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('createSlot', res.data);

  return res;
};
