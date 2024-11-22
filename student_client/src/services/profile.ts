import type { AxiosResponse } from 'axios';

import { logger } from '@/lib/default-logger';

import { authApi, centralApi } from './api';

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

export interface ResetPasswordData {
  password: string;
}

export interface CentralProfileResponse {
  role: string;
  student: CentralStudent;
}

export interface CentralStudent {
  id: number;
  name: string;
  roll_number: string;
  email: string;
  phone_number: string;
  branch: string;
  room: CentralRoom;
}

export interface CentralRoom {
  id: number;
  name: string;
  room_type: CentralRoomType;
  level: Level;
  block: Block;
  hostel: CentralHostel;
}

export interface CentralRoomType {
  id: number;
  name: string;
}

export interface Level {
  id: number;
  name: string;
}

export interface Block {
  id: number;
  name: string;
}

export interface CentralHostel {
  id: number;
  name: string;
}

//eslint-disable-next-line @typescript-eslint/no-empty-interface -- Empty 200 Ok reponses are causing ESlint errors
export interface OkResponse {}

export const getProfile = async (): Promise<AxiosResponse<CentralProfileResponse>> => {
  const token = localStorage.getItem('custom-auth-token');

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  // const res = await authApi.get('student/profile/', {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  const res = await centralApi.get('user/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getProfile', res.data);

  return res;
};

export const changePassword = async (values: ResetPasswordData): Promise<AxiosResponse<OkResponse>> => {
  const token = localStorage.getItem('custom-auth-token');

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const data = {
    password: values.password,
  };
  logger.debug('changePassword', data);

  const res = await authApi.post('user/reset-password/', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('changePassword', res.data);

  return res;
};
