import { type AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';

import { laundryApi } from './api';

export interface LaundrySlipResponse {
  id: number;
  transaction_id: string;
  code:string;
  user_id: number;
  items: LaundryResponseItemTypes;
  is_checked_out: boolean;
  is_delivered: boolean;
  item_count: number;
  creation_time: string;
  delievery_time: string;
  dropoff_time: string;
}

export interface SubmissionResponse {
  details:string;
}

export interface LaundryDetailsResponse {
  total_items: number;
  total_slips: number;
}

interface LaundryResponseItemTypes {
  id: number;
  LaundrySlipID: string;
  jeans: number;
  pants: number;
  pyjama: number;
  shorts: number;
  shirts: number;
  tshits: number;
  kurta_salwar: number;
  skirts: number;
  dupatta: number;
  bedsheet: number;
  pillow_cover: number;
  towel_hand_towel: number;
  turban: number;
  upper_hood: number;
}

export interface CheckoutLaundryItems {
  transaction_id: string;
  items: {
    [K in LaundryItemTypes]?: number;
  };
}


export interface GetSlipTransID {
  transaction_id: string;
  action: string;
}

type LaundryItemTypes =
  | 'jeans'
  | 'pants'
  | 'pyjama'
  | 'shorts'
  | 'shirts'
  | 'tshirts'
  | 'kurta_salwar'
  | 'skirts'
  | 'dupatta'
  | 'bedsheet'
  | 'pillow_cover'
  | 'towel_hand_towel'
  | 'turban'
  | 'upper_hood';

export const deliverLaundry = async (transactionID:string): Promise<AxiosResponse<SubmissionResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await laundryApi.patch(`deliver/${transactionID}`,{},{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const checkoutLaundrySlip = async (params: CheckoutLaundryItems): Promise<AxiosResponse<SubmissionResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await laundryApi.patch('checkout/', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};


export const getSlipTransID = async (params: GetSlipTransID): Promise<AxiosResponse<LaundrySlipResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await laundryApi.post('get-slip/', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};


export const getLaundryDetails = async (hostelID:number): Promise<AxiosResponse<LaundryDetailsResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await laundryApi.get(`collected/${String(hostelID)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },  
  });

  return res;
};
