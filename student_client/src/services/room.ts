
import { authClient } from '@/lib/auth/client';

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



export const getRoomsWSS = async (level: number): Promise<WebSocket> => {
  const token = (await authClient.getToken()).data;

  if (token === null || token === undefined) {
    throw new Error('You must be logged in to perform this action');
  }

  const url = `wss://api.hosmas.ccstiet.com/ws/preference/level/${String(level)}/room/?t=${token}`;

  const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log("WSS connection is open");
    };

    // socket.onmessage = (event) => {
    //   console.log(JSON.parse(event.data));
    // };


  return socket;


};