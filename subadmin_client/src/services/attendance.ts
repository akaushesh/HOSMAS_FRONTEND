import { type AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { leaveApi } from './api';
import {
  type AttendanceSession,
  type AttendanceResult,
  type ListSessionsResponse,
  type SessionResultsResponse,
  type ComputeAttendanceResponse,
  type SendMailResponse,
} from '@/types/attendance';

export const createSession = async (date: string): Promise<AxiosResponse<AttendanceSession>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.post<AttendanceSession>('leave/attendance/session/', { date }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('createSession', res.data);
  return res;
};

export const uploadGateScan = async (sessionId: number, file: File): Promise<AxiosResponse<void>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const formData = new FormData();
  formData.append('attendanceSessionId', String(sessionId));
  formData.append('file', file);

  const res = await leaveApi.post<void>('leave/attendance/upload-gate-scan/', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  logger.debug('uploadGateScan', res.data);
  return res;
};

export const uploadFingerprint = async (sessionId: number, file: File): Promise<AxiosResponse<void>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const formData = new FormData();
  formData.append('attendanceSessionId', String(sessionId));
  formData.append('file', file);

  const res = await leaveApi.post<void>('leave/attendance/upload-fingerprint/', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  logger.debug('uploadFingerprint', res.data);
  return res;
};

export const computeAttendance = async (sessionId: number): Promise<AxiosResponse<ComputeAttendanceResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.post<ComputeAttendanceResponse>(`leave/attendance/session/${String(sessionId)}/compute/`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('computeAttendance', res.data);
  return res;
};

export const getSessionResults = async (sessionId: number): Promise<AxiosResponse<SessionResultsResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.get<SessionResultsResponse>(`leave/attendance/session/${String(sessionId)}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('getSessionResults', res.data);
  return res;
};

export const listSessions = async (): Promise<AxiosResponse<ListSessionsResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.get<ListSessionsResponse>('leave/attendance/sessions/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('listSessions', res.data);
  return res;
};

export const sendMail = async (sessionId: number, resultIds?: number[]): Promise<AxiosResponse<SendMailResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.post<SendMailResponse>(`leave/attendance/session/${String(sessionId)}/send-mail/`, { resultIds }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('sendMail', res.data);
  return res;
};

export const updateResultStatus = async (resultId: number, status: string): Promise<AxiosResponse<AttendanceResult>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.patch<AttendanceResult>(`leave/attendance/result/${String(resultId)}/status`, { status }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('updateResultStatus', res.data);
  return res;
};

export const bulkUpdateStatus = async (resultIds: number[], status: string): Promise<AxiosResponse<AttendanceResult[]>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.patch<AttendanceResult[]>('leave/attendance/results/bulk-status', { ids: resultIds, status }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('bulkUpdateStatus', res.data);
  return res;
};
