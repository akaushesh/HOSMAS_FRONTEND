import type { AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { invitationApi } from './api';
import type { OkResponse } from './profile';

interface InvitationStatus {
  id: number;
  invitee_name: string;
  invitee_rollno: string;
  time: string;
}

export type InvitationStatusResponse = AxiosResponse<InvitationStatus[]>;

interface Invitation {
  id: number;
  group_leader_name: string;
  group_leader_rollno: string;
  time: string;
}

export type ReceivedInvitationResponse = AxiosResponse<Invitation[]>;

interface InvitationData {
  id: number;
}

interface TokenData {
  token: string;
}

export interface SuccessResponse {
  status: string;
}

export const getSentInvitationStatus = async (): Promise<InvitationStatusResponse> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await invitationApi.get('view/sent/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getSentInvitationStatus', res.data);

  return res;
};

export const getReceivedInvitations = async (): Promise<ReceivedInvitationResponse> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await invitationApi.get('view/received/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getInvitations', res.data);

  return res;
};

export const sendInvitation = async (values: TokenData): Promise<AxiosResponse<SuccessResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const data = {
    token: values.token,
  };

  const res = await invitationApi.post('send/', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('sendInvitation', res.data);

  return res;
};

// Route is not tested
export const withdrawInvitation = async (values: InvitationData): Promise<AxiosResponse<SuccessResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const data = {
    id: values.id,
  };

  const res = await invitationApi.post('withdraw/', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('withdrawInvitation', res.data);

  return res;
};

export const acceptInvitation = async (values: InvitationData): Promise<AxiosResponse<OkResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const data = {
    id: values.id,
  };

  const res = await invitationApi.post('accept/', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('acceptInvitation', res.data);

  return res;
};

export const deleteInvitation = async (values: InvitationData): Promise<AxiosResponse<OkResponse>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const data = {
    id: values.id,
  };

  const res = await invitationApi.delete('delete/', {
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('deleteInvitation', res.data);

  return res;
};
