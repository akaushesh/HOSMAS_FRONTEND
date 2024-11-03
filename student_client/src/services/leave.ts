import { type AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { leaveApi } from './api';

export interface CreateLeaveRequest {
  leaveDateFrom: string;
  leaveDateTo: string;
}

export interface CreateLeaveResponse {
  id: number;
  transactionID: string;
  studentName: string;
  rollNumber: string;
  phoneNumber: string;
  hostel: string;
  roomNumber: string;
  leaveDateFrom: string;
  leaveDateTo: string;
  leaveStatus: string;
  creationTime: string;
  approvalTime: null;
}

export type GetLeavesResponse = Leave[];

export interface Leave {
  id: number;
  transactionID: string;
  studentName: string;
  rollNumber: string;
  phoneNumber: string;
  hostel: string;
  roomNumber: string;
  leaveDateFrom: string;
  leaveDateTo: string;
  leaveStatus: string;
  creationTime: string;
  approvalTime?: null;
}

export interface GetLeavesRequest {
  page: number;
  limit: number;
}

export const createLeave = async (params: CreateLeaveRequest): Promise<AxiosResponse<CreateLeaveResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.post('leave/create-request/', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('createLeave', res.data);
  return res;
};

export const getLeaves = async ({ page, limit }: GetLeavesRequest): Promise<AxiosResponse<GetLeavesResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.get(`leave/get-requests?page=${page.toString()}&limit=${limit.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('getLeavesResponse', res.data);
  return res;
};
