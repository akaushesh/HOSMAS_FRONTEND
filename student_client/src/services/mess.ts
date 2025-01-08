import { type AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { messApi } from './api';

export interface MenuItem {
  ID: number;
  name: string;
  meal_type: 'Breakfast' | 'Lunch' | 'Dinner';
  veg: boolean;
  category: string;
}

export type DayMenu = Record<string, 'veg' | 'non-veg'>;

export type MealTypeMenu = Record<string, DayMenu>;

export interface MessMenu {
  Breakfast: MealTypeMenu;
  Lunch: MealTypeMenu;
  Dinner: MealTypeMenu;
  cycle_start: string;
  hostel_name: string;
}

export interface CreateFeedbackRequest {
  rating: number;
  description: string;
}

export interface FeedbackResponse {
  ID: number;
  user_id: number;
  timestamp: string;
  rating: number;
  description: string;
  hostel_id: number;
  meal_type: 'Breakfast' | 'Lunch' | 'Dinner';
}

export const getMessMenu = async (hostelId: number): Promise<AxiosResponse<MessMenu>> => {
  if (![5, 6].includes(hostelId)) {
    throw new Error('Only hostel IDs 5 and 6 are active');
  }

  const res = await messApi.get(`mess/get-menu/${String(hostelId)}/`);
  logger.debug('getMessMenu', res.data);
  return res;
};

export const submitFeedback = async (params: CreateFeedbackRequest): Promise<AxiosResponse<FeedbackResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await messApi.post('mess/give-feedback/', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  logger.debug('submitFeedback', res.data);
  return res;
};

export const getMenuItems = async (): Promise<AxiosResponse<MenuItem[]>> => {
  const res = await messApi.get('mess/get-menu-items/');
  logger.debug('getMenuItems', res.data);
  return res;
};
