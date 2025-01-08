import { type AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { leaveApi } from './api';

export interface CreateLeaveRequest {
  leaveDateFrom: string;
  leaveDateTo: string;
  reason: string;
  location: string;
}

export interface UpdateLeaveRequest {
  transaction_id:string;
  departure_date?:string;
  arrival_date?:string;
}



export type UpdateLeaveResponse=Leave; 
export type CreateLeaveResponse=Leave; 
export type DeleteLeaveResponse=Leave; 

export interface GetLeavesResponse {
  leaves: Leave[];
  caretaker_email:string;
  parents_email:string;
}

export interface Leave {
  approvalTime: string | null; 
  creationTime: string; 
  hostel: string;
  id: number;
  leaveDateFrom: string;
  leaveDateTo: string; 
  leaveStatus: string; 
  //  "c" --> created 
  //  "a" --> approved 
  //  "active" --> tenure declined 
  //  "d" --> declined
  //  "x" --> request cancelled
  phoneNumber: string;
  rollNumber: string;
  roomNumber: string;
  studentName: string;
  transactionID: string; 
  location: string;
  reason: string;
}

export interface DeleteLeaveParams {
  transactionId:string;
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


export const updateLeave = async (params: UpdateLeaveRequest): Promise<AxiosResponse<UpdateLeaveResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.patch('leave/update-request/', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('updateLeave', res.data);
  return res;
};


export const getLeaves = async (): Promise<AxiosResponse<GetLeavesResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.get(`leave/get-info`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('getLeavesResponse', res.data);
  return res;
};

export const deleteLeave = async ({transactionId}:DeleteLeaveParams): Promise<AxiosResponse<DeleteLeaveResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.delete(`leave/delete/${transactionId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('getLeavesResponse', res.data);
  return res;
};
