import { type AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

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

export interface LaundryInitResponse{
  is_active: boolean;
  next_date: string;
  laundry_number:string;
  laundry_slips:LaundrySlipResponse[];
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

export interface UpdateLaundryItems {
  transaction_id: string;
  items: {
    [K in LaundryItemTypes]?: number;
  };
}

export interface LaundryItems {
  items: {
    [K in LaundryItemTypes]?: number;
  };
}

type LaundryItemTypes =
  | 'jeans'
  | 'pants'
  | 'pyjama'
  | 'shorts'
  | 'shirts'
  | 'tshits'
  | 'kurta_salwar'
  | 'skirts'
  | 'dupatta'
  | 'bedsheet'
  | 'pillow_cover'
  | 'towel_hand_towel'
  | 'turban'
  | 'upper_hood';

export const createLaundrySlip = async (params: LaundryItems): Promise<AxiosResponse<LaundrySlipResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await laundryApi.post('create-laundry-slips/', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('createLaundrySlip', res.data);

  return res;
};

export const getLaundrySlips = async (): Promise<AxiosResponse<LaundryInitResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await laundryApi.get('get-slips/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const updateLaundrySlip = async (params: UpdateLaundryItems): Promise<AxiosResponse<LaundrySlipResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await laundryApi.put('update-laundry-slip/', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
