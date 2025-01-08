import { type AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { leaveApi } from './api';


export interface UpdateLeaveRequest {
  transaction_id:string;
  status:string;
}




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
  //  "x" --> request cancelled
  phoneNumber: string;
  rollNumber: string;
  roomNumber: string;
  studentName: string;
  transactionID: string; 
  location: string;
  reason: string;
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
export interface SearchRecordsParams{
  page:number;
  limit:number;
  status:string;
  text_query:string;
  arrival_date?:string|null;
  departure_date?:string|null;
}


export const updateLeave = async (params: UpdateLeaveRequest): Promise<AxiosResponse<string>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await leaveApi.patch('leave/set-status/', params, {
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

export const searchRecords = async (params:SearchRecordsParams): Promise<AxiosResponse<FetchRecordsResponse>> => {
  const token = (await authClient.getToken()).data;
  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  
  
  if(params.status==='all'){
    params.status='';
  }
 

  

  const res = await leaveApi.post(`leave/search/`, params,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('getSearchResponse', res.data);
  return res;
};



export const deleteLeave = async (transactionId:string): Promise<AxiosResponse<string>> => {
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
