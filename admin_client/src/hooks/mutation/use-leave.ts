import { type ErrorResponse } from '@/services/auth';
import { type UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';
import {type ResolutionFunctions, useCustomMutation } from './use-custom-mutation';
import { deleteLeave, setAutoApprove } from '@/services/leave';
import { updateLeave, type UpdateLeaveRequest} from '../../services/leave';


// export const useCreateLeaveSlip = ({
//   onSuccess,
//   onError,
// }: ResolutionFunctions<CreateLeaveResponse>): UseMutationResult<
//   AxiosResponse<CreateLeaveResponse>,
//   AxiosError<ErrorResponse>,
//   CreateLeaveRequest
// > => {
//   return useCustomMutation<CreateLeaveRequest, CreateLeaveResponse>({
//     mutationFn: createLeave,
//     onSuccess,
//     onError,
//   });
// };

export const useAutoApprove = ({
  onSuccess,
  onError,
}: ResolutionFunctions<string>): UseMutationResult<
  AxiosResponse<string>,
  AxiosError<ErrorResponse>,
  boolean
> => {
  return useCustomMutation<boolean, string>({
    mutationFn: setAutoApprove,
    onSuccess,
    onError,
  });
};


export const useUpdateLeaveSlip = ({
  onSuccess,
  onError,
}: ResolutionFunctions<string>): UseMutationResult<
  AxiosResponse<string>,
  AxiosError<ErrorResponse>,
  UpdateLeaveRequest
> => {
  return useCustomMutation<UpdateLeaveRequest, string>({
    mutationFn: updateLeave,
    onSuccess,
    onError,
  });
};

export const useDeleteLeaveSlip = ({
  onSuccess,
  onError,
}: ResolutionFunctions<string>): UseMutationResult<
  AxiosResponse<string>,
  AxiosError<ErrorResponse>,
  string
> => {
  return useCustomMutation<string, string>({
    mutationFn: deleteLeave,
    onSuccess,
    onError,
  });
};

