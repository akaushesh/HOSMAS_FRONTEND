import type { AxiosResponse } from 'axios';

import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

import { roomApi } from './api';
// import type { OkResponse } from './profile';

// interface Room {
//   level: number;
//   number: string;
// }

// interface Member {
//   name: string;
//   rollno: string;
//   cg: number;
//   alloted_room: Room;
// }

// export interface GroupResponse {
//   id: number;
//   leader: Member;
//   members: Member[];
//   cg: number;
//   role: string;
// }



export const getRooms = async (): Promise<AxiosResponse<any>> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const res = await roomApi.get('/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  logger.debug('getRooms', res.data);

  return res;
};
