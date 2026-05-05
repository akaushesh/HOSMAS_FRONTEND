import type { AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { groupApi, studentApi } from './api';
import type { OkResponse } from './profile';

export const createGroup = async (): Promise<AxiosResponse<OkResponse>> => {
  const token = (await authClient.getToken2()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await groupApi.post('create/', null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('createGroup', res.data);

  return res;
};

interface Room {
  level: number;
  number: string;
}

interface Member {
  name: string;
  rollno: string;
  cg: number;
  alloted_room: Room;
}

export interface GroupResponse {
  id: number;
  leader: Member;
  members: Member[];
  cg: number;
  role: string;
}

export interface Student {
  name: string;
  rollno: string;
}

export interface StudentData {
  rollno: string;
}

export const getGroup = async (): Promise<AxiosResponse<GroupResponse>> => {
  const token = (await authClient.getToken2()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await groupApi.get('view/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getGroup', res.data);

  return res;
};

export const searchStudent = async (values: StudentData): Promise<AxiosResponse<Student>> => {
  const token = (await authClient.getToken2()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const data = {
    rollno: values.rollno,
  };

  const res = await groupApi.post('search-student/', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('searchStudent', res.data);

  return res;
};

export const transferOwnersip = async (values: StudentData): Promise<AxiosResponse<OkResponse>> => {
  const token = (await authClient.getToken2()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const data = {
    rollno: values.rollno,
  };

  const res = await groupApi.post('transfer/', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('transferOwnership', res.data);

  return res;
};

// Some issue is causing 500 server error to appear but the route is working and producing effect
export const leaveGroup = async (): Promise<AxiosResponse<OkResponse>> => {
  const token = (await authClient.getToken2()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await groupApi.patch('leave/', null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('leaveGroup', res.data);

  return res;
};

export interface MyTokenResponse {
  status: string;
  token: string;
  name: string;
}

export const getMyToken = async (): Promise<AxiosResponse<MyTokenResponse>> => {
  const token = (await authClient.getToken2()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await groupApi.get('token/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getMyToken', res.data);

  return res;
};
