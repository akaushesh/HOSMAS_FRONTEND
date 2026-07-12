import type { AxiosResponse } from 'axios';
import { authClient } from '@/lib/auth/client';
import { preferenceApi } from './api';

export interface RoomListItem {
  id: number;
  name: string;
  status: string;
  available: boolean;
  locked_by: number | null;
  expires_in: number;
}

export const getAvailableRooms = async (): Promise<AxiosResponse<RoomListItem[]>> => {
  const token = (await authClient.getToken2()).data;
  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  return preferenceApi.get('available-rooms/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const lockRoom = async (roomId: number): Promise<AxiosResponse<{ status: string; message: string; expires_at: string; seconds_left: number }>> => {
  const token = (await authClient.getToken2()).data;
  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  return preferenceApi.post('lock-room/', { room_id: roomId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const confirmBooking = async (roomId: number): Promise<AxiosResponse<{ status: string; message: string }>> => {
  const token = (await authClient.getToken2()).data;
  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  return preferenceApi.post('confirm-booking/', { room_id: roomId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getRoomsWSS = async (level: number): Promise<WebSocket> => {
  const token = (await authClient.getToken()).data;
  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const url = `wss://api.hosmas.ccstiet.com/ws/preference/level/${String(level)}/room/?t=${token}`;
  return new WebSocket(url);
};