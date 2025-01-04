import { type AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { leaveApi } from './api';


export interface UpdateLeaveRequest {
  transaction_id:string;
  departure_date?:string;
  arrival_date?:string;
}



export type UpdateLeaveResponse=Leave; 
export type DeleteLeaveResponse=Leave; 

export interface GetLeavesResponse {
  leaves: Leave[];
  caretaker_email:string;
  parents_email:string;
}

export interface TotLeavesResponse {
  total_active_leaves:number;
  total_apprv_decl_leaves:number;
  total_pending_leaves:number;
  auto_approve:boolean;
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
  //  "d" --> declined
  //  "rc" --> request cancelled
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


export interface FetchRecordsParams{
  page:number;
  limit:number;
  status:string;
}

export interface FetchRecordsResponse{
  total_pages:number;
  leaves:Leave[];
}


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



export const getTotalLeaves = async (): Promise<AxiosResponse<TotLeavesResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.get(`leave/get-info`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('getTotalLeaves', res.data);
  return res;
};


export const setAutoApprove = async (autoApprove:boolean): Promise<AxiosResponse<string>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.post(`leave/set-auto-approve/`,{
      auto_approve:autoApprove
  } ,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('autoApprove', res.data);
  return res;
};





export const getRecords = async ({page,limit,status}:FetchRecordsParams): Promise<AxiosResponse<FetchRecordsResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.get(`leave/get-requests?page=${String(page)}&limit=${String(limit)}&status=${status}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('getRecordsResponse', res.data);
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
