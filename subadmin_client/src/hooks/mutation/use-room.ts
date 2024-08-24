// import type { UseMutationResult } from '@tanstack/react-query';

// import { useCustomMutation, type ResolutionFunctions } from './use-custom-mutation';
// import { getRoomsWSS } from '@/services/room';

// export const useRooms = ({ onSuccess, onError }: ResolutionFunctions): UseMutationResult => {
//   return ;
// };

export interface InputRoomProps{
    clusterId:string;
    attached: number;
    room: string[];
    capacity: number[];
    availability: number[];
    ac:boolean[];
}

export interface SelectedRoomProps{
    floor: string;
    attached: string;
    room: string;
    capacity: number;
}