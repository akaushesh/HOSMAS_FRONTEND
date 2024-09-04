import type { AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { preferenceApi } from './api';
import type { SuccessResponse } from './invitation';

interface Choice {
  id: number;
  room_name: string;
  room_hostel: string;
}

interface Preference {
  id: number;
  room_type_name: string;
  hostel_name: string;
  priority: number;
}

interface PreferenceData {
  retain: boolean;
  preferences: Preference[];
}

export interface PreferenceResponse {
  status: string;
  data: PreferenceData;
}

export interface PreferenceStatusResponse {
  is_live: string;
  can_retain: string;
}

interface Levels {
  level_no: number;
  layout_image: string;
}

interface LevelsResponse {
  room_capacity: number;
  levels: Levels[];
}

type Order = Record<number, number>;

export interface PreferenceOrder {
  order: Order;
}

interface RoomData {
  id: number;
  room_type_name: string;
  hostel_name: string;
  priority: number;
}

interface CreatePreferenceResponse {
  status: string;
  data: RoomData[];
}

export const getChoices = async (): Promise<AxiosResponse<Choice[]>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await preferenceApi.get('getChoices/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getChoices', res.data);

  return res;
};

export const getPreference = async (): Promise<AxiosResponse<PreferenceResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await preferenceApi.get('getPreference/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getPreferences', res.data);

  return res;
};

export const getPreferenceStatus = async (): Promise<AxiosResponse<PreferenceStatusResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await preferenceApi.get('status/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getPreferenceStatus', res.data);

  return res;
};

export const setRetain = async (): Promise<AxiosResponse<SuccessResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await preferenceApi.post(
    'retain/',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  logger.debug('setRetain', res.data);

  return res;
};

export const createPreference = async (data: PreferenceOrder): Promise<AxiosResponse<CreatePreferenceResponse>> => {
  const token = (await authClient.getToken()).data;

  console.log(data);

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await preferenceApi.post('createPreference/', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('createPreference', res.data);

  return res;
};

export const getAllLevel = async (): Promise<AxiosResponse<LevelsResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await preferenceApi.get('alloted-hostel-levels/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getAllLevels', res.data);

  return res;
};
