import type { AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { authApi } from './api';

interface Batch {
  id: number;
  name: string;
}

interface Room {
  level: number;
  number: string;
}

interface User {
  email: string;
}

interface Group {
  leader_name: string;
  leader_email: string;
  size: number;
}

interface Hostel {
  room_type_id: number;
  room_type: string;
  hostel_id: number;
  hostel: string;
  fee: number;
}

export interface ProfileResponse {
  rollno: string;
  name: string;
  phoneno: string;
  token: string;
  gender: string;
  cg: number;
  batch: null | Batch;
  alloted_room: Room;
  user: User;
  group: Group;
  is_preference_filled: boolean;
  academic_session: string;
  fee_structure_url: string;
  current_hostel: null | Hostel;
  preview_hostel: null | Hostel;
  alloted_hostel: null | Hostel;
  group_size_limit: number;
}
export interface SuperVisorHostel {
  id: number;
  name: string;
}

export interface Supervisor {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  hostel: SuperVisorHostel;
}

export interface SupervisorProfileResponse {
  role: string;
  supervisor: Supervisor;
}

interface ResetPasswordData {
  password: string;
}

//eslint-disable-next-line @typescript-eslint/no-empty-interface -- Empty 200 Ok reponses are causing ESlint errors
export interface OkResponse {}

export const getProfile = async (): Promise<AxiosResponse<SupervisorProfileResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await authApi.get('user/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getProfile', res.data);

  return res;
};

export const changePassword = async (values: ResetPasswordData): Promise<AxiosResponse<OkResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const data = {
    password: values.password,
  };
  logger.debug('changePassword', data);

  const res = await authApi.post('auth/change-password/', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('changePassword', res.data);

  return res;
};
